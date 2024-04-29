<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeatController extends Controller
{
    public function index()
    {
        $seats = Seat::where('available', true)->get(); // Hanya ambil tempat duduk yang tersedia

        return Inertia::render('SeatSelection', [
            'seats' => $seats
        ]);
    }
    public function tempat()
    {
        $seats = Seat::with( 'seats')->get();
        return Inertia::render('Kapal/Index', [
            'seats' => $seats
        ]);
    }
    //
    public function reserve(Seat $seat)
    {
        if ($seat->available) {
            $seat->available = false;
            $seat->save();

            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false, 'message' => 'Tempat duduk sudah dipesan.']);
        }
    }

    
}
