<?php

namespace App\Http\Controllers;

use App\Models\Rute;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RuteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $rutes = Rute::with('jadwals')->get();
        return Inertia::render('Rute', [
            'rutes' => $rutes
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
         $request->validate([
            'jadwal_id' => 'required',
            'asal' => 'required',
            'tujuan' => 'required',


        ], [
            'asal.required' => "asal tidak boleh kosong",

        ]);
        Rute::create($request->all());
        return back()->with('message', 'Tambah Rute berhasil disimpan');
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
        $rute = Rute::findOrFail($id); // mencari data berdasarkan id
        $rute->delete();
        return back()->with('message', 'Info Jadwal berhasil dihapus');
    }
}
