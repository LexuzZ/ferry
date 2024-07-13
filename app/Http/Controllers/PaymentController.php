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
        Config::$serverKey = config('services.midtrans.server_key');

        // Generate hash
        $hashed = hash('sha512', $request->order_id . $request->status_code . $request->gross_amount . Config::$serverKey);

        // Validasi hash signature
        if ($hashed == $request->signature_key) {
            // Cek apakah terdapat transaction_id
            if ($request->has('order_id')) {
                $transaction = Transaction::where('ticket_id', $request->order_id)->first();

                // Cek apakah transaksi ditemukan
                if ($transaction) {
                    // Memperbarui status transaksi berdasarkan status transaksi dari Midtrans
                    switch ($request->transaction_status) {
                        case 'capture':
                        case 'settlement':
                            $transaction->update(['status' => 'paid']);
                            break;

                        case 'pending':
                            $transaction->update(['status' => 'pending']);
                            break;

                        case 'deny':
                        case 'expire':
                        case 'cancel':
                            $transaction->update(['status' => 'unpaid']);
                            break;

                        default:
                            return response()->json(['message' => 'Unknown transaction status'], 400);
                    }

                    return response()->json(['message' => 'Transaction status updated'], 200);
                }

                return response()->json(['message' => 'Transaction not found'], 404);
            }

            return response()->json(['message' => 'Transaction ID not provided'], 400);
        }

        return response()->json(['message' => 'Invalid signature'], 403);
    }
}
