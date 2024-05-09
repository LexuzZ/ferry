<?php

namespace App\Http\Controllers;

use App\Models\Kapal;
use App\Models\Seat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeatController extends Controller
{
    public function index($kapal)
    {
        $kapal = Kapal::find($kapal)->seats->where('available', true);
        return Inertia::render('SeatSelection', [
            'seats' => $kapal
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
