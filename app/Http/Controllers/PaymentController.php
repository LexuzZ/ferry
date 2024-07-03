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
        $totalVehiclePrice = $ticket->vehicles->sum('price');
        $totalPassengerPrice = $ticket->passengers->sum('price');
        $totalPrice = $totalVehiclePrice + $totalPassengerPrice;

            $totalDewasa = $ticket->passengers->where('category', 'dewasa')->count();
            $totalAnak = $ticket->passengers->where('category', 'anak')->count();
            $totalPenumpang = $totalDewasa + $totalAnak;
            $totalSepedaMotor = $ticket->vehicles->where('type', 'sepeda_motor')->count();
            $totalMobil = $ticket->vehicles->where('type', 'mobil')->count();
            $totalTruk = $ticket->vehicles->where('type', 'truk')->count();
            $totalKendaraan = $totalSepedaMotor + $totalMobil + $totalTruk;

            // Menambahkan data tambahan ke dalam objek tiket
            $ticket->totalVehiclePrice = $totalVehiclePrice;
            $ticket->totalPassengerPrice = $totalPassengerPrice;
            $ticket->totalPrice = $totalPrice;
            $ticket->totalDewasa = $totalDewasa;
            $ticket->totalAnak = $totalAnak;
            $ticket->totalPenumpang = $totalPenumpang;
            $ticket->totalKendaraan = $totalKendaraan;


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
                'first_name' => $ticket->nama,
                // 'email' => auth()->user()->email,
            ],
        ];


        $snapToken = Snap::getSnapToken($params);
        Transaction::create([
            'ticket_id' => $ticket->id,
            'user_id' => $ticket->user_id,
            'midtrans_transaction_id' => $snapToken,
            'amount' => $ticket->passengers->sum('price') + $ticket->vehicles->sum('price'),
            'status' => 'unpaid',
        ]);

        return Inertia::render('Payment', [
            'ticket' => $ticket,
            'snapToken' => $snapToken,


        ]);
    }

    public function callback(Request $request)
    {
        $transaction = new Notification();
        $data = $request->all();
        $trxId = $data['ticket_id'];
        $status = $data['status'];
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
