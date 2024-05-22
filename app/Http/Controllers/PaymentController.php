<?php

namespace App\Http\Controllers;

use App\Models\Passenger;
use App\Models\Ticket;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\Notification;
use Midtrans\Snap;
use Midtrans\Transaction as MidtransTransaction;

class PaymentController extends Controller
{
    public function create(Ticket $ticket)
    {
        $user = auth()->user()->name;
        
        // Set konfigurasi Midtrans
        Config::$serverKey = config('services.midtrans.server_key');
        Config::$clientKey = config('services.midtrans.client_key');
        Config::$isProduction = false; // Ubah ke true jika di produksi
        Config::$isSanitized = true;
        Config::$is3ds = true;




        $params = [
            'transaction_details' => [
                'order_id' => $ticket->id,
                'gross_amount' => $ticket->passengers->sum('price') + $ticket->vehicles->sum('price'),
            ],
            
            'customer_details' => [
                'first_name' => auth()->user()->name,
                'email' => auth()->user()->email,
            ],
        ];


        $snapToken = Snap::getSnapToken($params);
        Transaction::create([
            'ticket_id' => $ticket->id,
            'midtrans_transaction_id' => $snapToken,
            'amount' => $ticket->passengers->sum('price') + $ticket->vehicles->sum('price'),
            'status' => 'unpaid',
        ]);

        return Inertia::render('Payment', [
            'ticket' => $ticket,
            'snapToken' => $snapToken,
            'user' => $user,
           
        ]);
    }

    public function callback(Request $request)
    {
        $data = $request->all();
        $trxId = $data['ticket_id'];
        $status = $data['transaction_status'];
        $channelResponse = $data['channel_response_message'];

        $transaction = Transaction::find($trxId);

        switch ($status) {
            case 'settlement':
                $transaction->update([
                    'status' => 'proccess'
                ]);
                $transaction->update([
                    'status' => 'success'
                ]);
                break;

            case 'expire':
            case 'cancel':
                $transaction->update([
                    'status' => 'canceled'
                ]);
                $transaction->update([
                    'status' => 'canceled'
                ]);
                break;

            default:

                break;
        }

        if ($channelResponse !== null && $channelResponse == "Approved") {
            $transaction->update([
                'status' => 'proccess'
            ]);
            $transaction->update([
                'status' => 'success'
            ]);
        }

        return response()->json(
            [
                'status' => 'success',
                'message' => 'success'
            ]
        );
    }
}
