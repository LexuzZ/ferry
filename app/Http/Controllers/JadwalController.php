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
    public function destroy(Jadwal $id)
    {
        //

        $id->delete();
        return back()->with('message', 'Info Jadwal berhasil dihapus');
    }
}
