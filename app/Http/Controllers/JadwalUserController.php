<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
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
    public function show($ruteId)
    {
        //
        $rute = Rute::find($ruteId);

        // Jika rute tidak ditemukan, kembalikan response kosong
        if (!$rute) {
            return response()->json(['message' => 'Rute tidak ditemukan'], 404);
        }

        // Ambil jadwal yang terkait dengan rute
        $jadwals = $rute->jadwals;

        // Kembalikan data jadwal dalam bentuk response JSON
        return Inertia::render('UserJadwal', [
            'jadwals' => $jadwals,
            'rute' => $rute
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
