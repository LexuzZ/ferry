<?php

namespace App\Http\Controllers;

use App\Http\Resources\Collection;
use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
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
