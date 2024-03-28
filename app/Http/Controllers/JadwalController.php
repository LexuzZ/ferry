<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use App\Models\Rute;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JadwalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jadwals = Jadwal::with('rutes')->get();

        return Inertia::render('Jadwal', [
            'jadwals' =>  $jadwals



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
        $data = $request->validate([
            'asal' => 'required',
            'tujuan' => 'required',
            'tanggal' => 'required',
            'tiba' => 'required',
            'keberangkatan' => 'required',

        ], [
            'tanggal.required' => "tanggal tidak boleh kosong",

        ]);
        Jadwal::create($data);
        return back()->with('message', 'Info Jadwal berhasil disimpan');
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
