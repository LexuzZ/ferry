<?php

namespace App\Http\Controllers;

use App\Models\Kapal;
use App\Models\Rute;
use App\Models\Seat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KapalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function count()
    // {
    //     $seatCount = Seat::count();
    //     return Inertia::render('Kapal/Index', [
    //         'seatCount' => $seatCount,

    //     ]);
    // }
    public function index()
    {
        //
        $ships = Kapal::with('rutes')->get();
        return Inertia::render('Kapal/Index', [
            'ships' => $ships
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $rutes = Rute::all();
        return Inertia::render('Kapal/Create', ['rutes' => $rutes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'rute_id' => 'required|exists:rutes,id',
            'nama_kapal' => 'required',
        ], [
            'nama_kapal.required' => "nama kapal tidak boleh kosong",

        ]);
        Kapal::create($request->all());
        return redirect()->route('kapal.index')->with('message', 'data kapal berhasil disimpan');
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
