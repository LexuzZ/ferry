<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
use App\Models\Ticket;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JadwalUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $rutes = Rute::all();

        return Inertia::render('UserDashboard', [

            'rutes' => $rutes
        ]);
    }
    public function order($id)
    {
        $jadwal = Jadwal::with('rutes', 'kapals')->findOrFail($id);
       
        
        $ticket = Ticket::with(['vehicles', 'passengers','rutes', 'kapals', 'jadwals'])->get();

        return Inertia::render('FormOrder',  [
            'jadwal' => $jadwal,
            'ticket' => $ticket,
           
        ]);
    }
    public function riwayat(){
        $tickets = Ticket::with(['rutes', 'kapals', 'jadwals','vehicles', 'passengers'])->get();
        // dd($tickets);
        // $transaction = Transaction::get(['status', 'amount']);
        // dd($transaction);
        return Inertia::render('Tiket/Riwayat', ['ticket' => $tickets, ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('FormOrder');
    }

    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);
        return Inertia::render('Tickets/Show', ['ticket' => $ticket]);
    }
    
    public function pdf($id)
    {
        $ticket = Ticket::with(['rutes', 'kapals', 'jadwals','vehicles', 'passengers', 'transactions'])->findOrFail($id);
        return Inertia::render('Tiket/PDFPage', ['ticket' => $ticket]);
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
