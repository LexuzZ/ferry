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
        $totalSeats = $seats->count();
        $totalAvailableSeats = $seats->where('available', true)->count();
        $totalUnavailableSeats = $totalSeats - $totalAvailableSeats;

        return Inertia::render('Seats/Index', [
            'seats' => $seats,
            'kapal_id' => $kapalId,
            'jadwal_id' => $jadwalId,
            'totalSeats' => $totalSeats,
            'totalAvailableSeats' => $totalAvailableSeats,
            'totalUnavailableSeats' => $totalUnavailableSeats,
        ]);
    }
    // public function show($kapalId, $jadwalId)
    // {
    //     $jadwal = Jadwal::with('kapals')->findOrFail($jadwalId);

    //     $seats = $jadwal->seats->where('kapal_id', $kapalId);
    //     $reservedSeats = $seats->where('available', false);

    //     return Inertia::render('FormOrder', [
    //         'seats' => $seats,
    //         'reservedSeats' => $reservedSeats,
    //         'kapal_id' => $kapalId,
    //         'jadwal_id' => $jadwalId,
    //     ]);
    // }


    public function reserve(Request $request)
    {
        $request->validate([
            'kapal_id' => 'required|exists:kapals,id',
            'jadwal_id' => 'required|exists:jadwals,id',
            'seat_ids' => 'required|array',
            'seat_ids.*' => 'exists:seats,id',
        ]);

        $seatIds = $request->input('seat_ids');
        $kapalId = $request->input('kapal_id');
        $jadwalId = $request->input('jadwal_id');

        $seats = Seat::whereIn('id', $seatIds)
            ->where('kapal_id', $kapalId)
            ->where('jadwal_id', $jadwalId)
            ->where('available', true)
            ->get();

        if ($seats->count() === count($seatIds)) {
            foreach ($seats as $seat) {
                $seat->available = false;
                $seat->save();
            }

            Booking::create([
                'user_id' => $request->user()->id,
                'kapal_id' => $kapalId,
                'jadwal_id' => $jadwalId,
                'seat_ids' => $seatIds,
            ]);

            return redirect()->route('order.ticket', ['id' => $jadwalId])
                ->with('success', 'Tempat duduk berhasil dipesan.');
        }

        return redirect()->back()->with('error', 'Satu atau lebih tempat duduk tidak tersedia.');
    }




    //

}
