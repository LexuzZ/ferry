<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
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
        $jadwals = Jadwal::with('rutes', 'kapals')->get();
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
        $request->validate([

            'tanggal' => 'required',
            'tiba' => 'required',
            'keberangkatan' => 'required',

        ], [
            'required' => "data ini tidak boleh kosong",


        ]);
        Jadwal::create($request->all());
        return back()->with('message', 'Info Jadwal berhasil disimpan');
        // return Inertia::render('Jadwals/Show', [
        //     'post' => $comment->post,
        //     'comments' => $comment->post->comments,
        // ])
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
    public function edit(string $jadwal)
    {
        //
        return inertia('Jadwals/Edit', [
            'jadwal' => $jadwal,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Jadwal $jadwal)
    {
        //
        //set validation
        $request->validate([
            'tanggal' => 'required',
            'tiba' => 'required',
            'keberangkatan' => 'required',
        ], [
            'required' => "data ini tidak boleh kosong",
        ]);

        //update ticket
        $jadwal->update([
            'tanggal'     => $request->tanggal,
            'tiba'   => $request->tiba,
            'keberangkatan'   => $request->keberangkatan,
            
        ]);

        //redirect
        return Inertia::render('Jadwal');
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
