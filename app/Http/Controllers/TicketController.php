<?php

namespace App\Http\Controllers;

use App\Models\Passenger;
use App\Models\Ticket;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     //
    //     $tickets = Ticket::with('passengers', 'vehicles')->get();
    //     return Inertia::render('FormOrder', ['ticket'=> $tickets]);
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        // return Inertia::render('Payment');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'jadwal_id' => 'required',
            'passengers' => 'required|array',
            'vehicles' => 'required|array',
        ]);

        $ticket = Ticket::create([
            'jadwal_id' => $request->jadwal_id,
            'code' => uniqid('TKT-'),
        ]);

        foreach ($request->input('passengers') as $passengerData) {
            Passenger::create([
                'category' => $passengerData['category'],
                'ticket_id' => $ticket->id,
            ]);
        }

        foreach ($request->input('vehicles') as $vehicleData) {
            Vehicle::create([
                'type' => $vehicleData['type'],
                'ticket_id' => $ticket->id,
            ]);
        }

        return redirect()->route('payment.create', ['ticket' => $ticket->id])->with('message', 'Order Tiket berhasil dibuat');
        // return back(['ticket' => $ticket->id])->with('message', 'Order Tiket berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
