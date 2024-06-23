<?php

namespace App\Http\Controllers;

use App\Models\Kapal;
use App\Models\Seat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeatController extends Controller
{
    //dalam project pemesanan tiket dengan laravel react inertia. Bagaimana cara agar informasi tempat duduk sesuai dengan id kapal dan id jadwal?

    public function index($kapalId)
    {
        $seats = Seat::where('kapal_id', $kapalId)
            ->where('available', true)
            ->get();

        return Inertia::render('Seats/Index', [
            'seats' => $seats,
            'kapal_id' => $kapalId,
        ]);
    }

    //
    public function reserve(Request $request, Seat $seat)
    {
        if ($seat->available) {
            $seat->available = false;
            $seat->save();
        }
        // Simpan detail tempat duduk yang dipilih dalam sesi
        $request->session()->put('reserved_seat', $seat);

        return redirect()->route('seats.index');
    }

    public function confirmation(Request $request)
    {
        $seat = $request->session()->get('reserved_seat');

        return Inertia::render('FormOrder', [
            'seat' => $seat,
        ]);
    }
}
