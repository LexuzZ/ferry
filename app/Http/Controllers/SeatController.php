<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Seat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SeatController extends Controller
{
    //dalam project pemesanan tiket dengan laravel react inertia. Bagaimana cara agar informasi tempat duduk sesuai dengan id kapal dan id jadwal?

    public function index($kapalId, $jadwalId)
    {
        $seats = Seat::where('kapal_id', $kapalId)
            ->where('jadwal_id', $jadwalId)
            ->get();


        return Inertia::render('Seats/Index', [
            'seats' => $seats,
            'kapal_id' => $kapalId,
            'jadwal_id' => $jadwalId,
        ]);
    }
    public function show($kapalId, $jadwalId)
    {
        $jadwal = Jadwal::with('kapals', 'seats')->findOrFail($jadwalId);

        $seats = $jadwal->seats->where('kapal_id', $kapalId);
        $reservedSeats = $seats->where('available', false);

        return Inertia::render('FormOrder', [
            'seats' => $seats,
            'reservedSeats' => $reservedSeats,
            'kapal_id' => $kapalId,
            'jadwal_id' => $jadwalId,
        ]);
    }
    public function reserve(Request $request, Seat $seat)
    {
        $request->validate([
            'kapal_id' => 'required|exists:kapals,id',
            'jadwal_id' => 'required|exists:jadwals,id',
        ]);

        // Verifikasi apakah tempat duduk tersedia dan cocok dengan kapal_id dan jadwal_id
        if ($seat->available && $seat->kapal_id == $request->kapal_id && $seat->jadwal_id == $request->jadwal_id) {
            $seat->available = false;
            $seat->save();

            Booking::create([
                'user_id' => Auth::id(),
                'seat_id' => $seat->id,
            ]);

            return redirect()->route('seats.index', ['kapal' => $seat->kapal_id, 'jadwal' => $seat->jadwal_id])
                             ->with('success', 'Tempat duduk berhasil dipesan.');
        }

        return redirect()->back()->with('error', 'Tempat duduk tidak tersedia atau tidak valid.');
    }


    //
   
}
