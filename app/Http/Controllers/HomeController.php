<?php

namespace App\Http\Controllers;

use App\Http\Resources\Collection;
use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $rutes = new Collection(Rute::all());
       
        // $rutes = Rute::all();
        return Inertia::render('Homepage', [
            'rutes' => $rutes,
           
        ]);
    }

    // public function cekBooking(){
    //     $cek = Ticket::with([ 'jadwals', 'rutes', 'kapals']);
    //     return Inertia::render('CodeBooking', ['cek' =>$cek]);
    // }
    public function search(Request $request)
    {
        $code = $request->input('code');

        $ticket = Ticket::with(['jadwals', 'rutes', 'kapals'])->where('code', $code)->first();

        if (!$ticket) {
            return redirect()->back()->withErrors(['message' => 'Ticket not found.']);
        }

        return Inertia::render('CodeBooking', [
            'ticket' => $ticket,
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $rute = Rute::with('jadwals', 'kapals')->findOrFail($id);
        // $rutes = new Collection(Rute::find($id));
        // $jadwals = $rute->jadwals()->get();
        // $kapals = $rute->kapals()->get();
        // dd($kapal);
        //  return response()->json([
        //     'rute' => $rute,
            
        // ]);
            return Inertia::render('HomeDetail', [
                'rute' => $rute,
                
            ]);
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
