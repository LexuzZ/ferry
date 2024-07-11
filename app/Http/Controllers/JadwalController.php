<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
use Illuminate\Http\Request;
use Inertia\Inertia;
use RealRashid\SweetAlert\Facades\Alert;

class JadwalController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {

        $jadwals = Jadwal::with('kapals')->get();
       
        return Inertia::render('Jadwal/Index', [
            'jadwals' => $jadwals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        $rute = Rute::all();
        return Inertia::render('Jadwal/Create', [
            'rute' => $rute,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'tanggal' => 'required',
            'tiba' => 'required',
            'keberangkatan' => 'required',

        ], [
            'required' => "data ini tidak boleh kosong",


        ]);
        Jadwal::create($request->all());
        return redirect()->route('jadwals.index')->with('message', 'Info Jadwal berhasil disimpan');
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Jadwal $jadwal)
    {
        //
        $kapal = Kapal::all();
        $rute = Rute::all();
        return inertia('Jadwal/Edit', [
            'jadwal' => $jadwal,
            'kapal' => $kapal,
            'rute' => $rute,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Jadwal $jadwal)
    {
        //
        //set validation
        $data = $request->validate([
            'tanggal' => 'required',
            'tiba' => 'required',
            'keberangkatan' => 'required',
        ], [
            'required' => "data ini tidak boleh kosong",
        ]);

        //update ticket
        $jadwal->update($data);

        //redirect
        return redirect()->route('jadwals.index')->with('message', 'Info Jadwal berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $jadwals = Jadwal::findOrFail($id); // mencari data berdasarkan id
        $jadwals->delete();
        return back()->with('message', 'Info Jadwal berhasil dihapus');
    }
}
