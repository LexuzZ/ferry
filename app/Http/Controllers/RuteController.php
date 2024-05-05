<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RuteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $rutes = Rute::with('jadwals', 'kapals')->get();
        $ships = Kapal::withCount('seats')
            ->with(['seats' => function ($query) {
                $query->selectRaw('kapal_id, COUNT(*) as total_seats, SUM(available) as total_available')
                    ->groupBy('kapal_id');
            }])
            ->get();


        return Inertia::render('Rute/Index', [
            'rutes' => $rutes,
            'ships' => $ships,
        ]);
    }

    public function ruteid()
    {
        // $rutes = Rute::all();
        // return Inertia::render('userJadwals', ['rutes' => $rutes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //



        $rutes = Rute::with('jadwals', 'kapals')->get();
        return Inertia::render('Rute/Create', ['rutes' => $rutes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'jadwal_id' => 'required',
            'kapal_id' => 'required',
            'nama_rute' => 'required',


        ], [
            'jadwal_id.required' => "ID Jadwal tidak boleh kosong",
            'kapal_id.required' => "ID kapal tidak boleh kosong",
            'nama_rute.required' => "Rute nama_rute tidak boleh kosong",

        ]);
        Rute::create($request->all());
        return redirect()->route('rute.index')->with('message', 'Rute berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $rutes = Rute::with('jadwals', 'kapals')->findOrFail($id);
        dd($rutes);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rute $rute)
    {
        //
        return inertia::render('Rute/Edit', [
            'rute' => $rute,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rute $rute)
    {
        //
        $data = $request->validate([

            'nama_rute' => 'required',
        ], [
            'nama_rute.required' => "Rute tidak boleh kosong",
        ]);

        //update ticket
        $rute->update($data);

        //redirect
        return redirect()->route('rute.index')->with('message', 'Rute berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $rute = Rute::findOrFail($id); // mencari data berdasarkan id
        $rute->delete();
        return back()->with('message', 'Info Jadwal berhasil dihapus');
    }
}
