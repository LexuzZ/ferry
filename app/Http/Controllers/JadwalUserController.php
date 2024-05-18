<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
use App\Models\Ticket;
use App\Models\TicketType;
use App\Models\User;
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
        $rutes = Rute::with('jadwals', 'kapals')->get();

        return Inertia::render('UserJadwal', [

            'rutes' => $rutes
        ]);
    }
    public function order($id){
        // $jadwal = Jadwal::all();
        $jadwal = Jadwal::findOrFail($id);
        $user_id = auth()->user();
        $ticket = Ticket::with( 'seats')->get();
        // $ticket = TicketType::all();

        return Inertia::render('FormOrder',  ['jadwal'=>$jadwal, 'user' => $user_id, 'ticket' => $ticket]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('FormOrder');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'jadwal_id' => 'required',
            'penumpang' => 'required',
           
        ]);

        Ticket::create($request->all());

        return back()->with('message', 'Order Tiket berhasil dibuat');

    }

    /**
     * Display the specified resource.
     */
    public function show($ruteId)
    {
        //
        
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
