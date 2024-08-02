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
    
    public function create()
    {
        //
        // return Inertia::render('Payment');
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'jadwal_id' => 'nullable|exists:jadwals,id',
            'kapal_id' => 'nullable|exists:kapals,id',
            'rute_id' => 'nullable|exists:rutes,id',
            'user_id' => 'nullable|exists:users,id',
            'nama' => 'required|string',
            'ktp' => 'required|string',
            'passengers' => 'required|array',
            'vehicles' => 'nullable|array',
        ]);

        $ticket = Ticket::create([
            'jadwal_id' => $request->jadwal_id,
            'kapal_id' => $request->kapal_id,
            'rute_id' => $request->rute_id,
            'user_id' => $request->user()->id,
            'code' => uniqid('TKT-'),
            'ktp' => $request->ktp,
            'nama' => $request->nama,
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
        $ticket = Ticket::with('jadwals')->findOrFail($id);
        dd($ticket);
        // Mengirim data ke view menggunakan Inertia
        // return Inertia::render('Tickets/Show', [
        //     'ticket' => $ticket
        // ]);
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
