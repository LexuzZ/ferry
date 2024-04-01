<?php

namespace App\Http\Controllers;

use App\Models\Kapal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KapalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $kapals = Kapal::with('jadwals')->get();
        return Inertia::render('Kapal', [
            'kapals' => $kapals
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

            'nama_kapal' => 'required',
            'jadwal_id' => 'required',



        ], [
            'nama_kapal.required' => "nama kapal tidak boleh kosong",

        ]);
        Kapal::create($request->all());
        return back()->with('message', 'Tambah Kapal berhasil disimpan');
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
