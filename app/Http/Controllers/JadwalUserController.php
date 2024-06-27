<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
use App\Models\Ticket;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class JadwalUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Ambil data rute dan kapal
        $rutes = DB::table('rutes')->select('id', 'nama_rute')->get();
        $kapals = DB::table('kapals')->select('id', 'nama_kapal')->get();

        // Buat query dengan join
        $query = DB::table('jadwals')
            ->join('rutes', 'jadwals.rute_id', '=', 'rutes.id')
            ->join('kapals', 'jadwals.kapal_id', '=', 'kapals.id')
            ->select('jadwals.*', 'rutes.nama_rute', 'kapals.nama_kapal');

        // Tambahkan filter berdasarkan parameter 'search'
        if ($request->has('search_rute') && $request->search_rute != '') {
            $query->where('rutes.nama_rute', 'like', '%' . $request->search_rute . '%');
        }

        if ($request->has('search_kapal') && $request->search_kapal != '') {
            $query->where('kapals.nama_kapal', 'like', '%' . $request->search_kapal . '%');
        }

        if ($request->has('search_tanggal') && $request->search_tanggal != '') {
            $query->whereDate('jadwals.tanggal', $request->search_tanggal);
        }

        // Paginate hasil query
        $jadwal = $query->paginate(8);

        // Render dengan Inertia
        return Inertia::render('UserDashboard', [
            'jadwal' => $jadwal,
            'rutes' => $rutes,
            'kapals' => $kapals,
            'filters' => $request->only(['search_rute', 'search_kapal', 'search_tanggal']),
            'total' => $jadwal->total()
        ]);
    }
    public function order(Request $request, $id)
    {
        $jadwal = Jadwal::with('rutes', 'kapals')->findOrFail($id);
        $reservedSeats = $jadwal->seats->where('available', false);


        $ticket = Ticket::with(['vehicles', 'passengers', 'rutes', 'kapals', 'jadwals'])
            ->where('user_id', $request->user()->id)
            ->get();
        return Inertia::render('FormOrder',  [
            'jadwal' => $jadwal,
            'ticket' => $ticket,
            'reservedSeats' => $reservedSeats,
        
            

        ]);
    }
    public function riwayat(Request $request)
    {
        // $tickets = Ticket::with(['rutes', 'kapals', 'jadwals','vehicles', 'passengers', 'transactions'])->get();
        $transaksi = Transaction::with('tickets')->where('user_id', $request->user()->id)
            ->get();
        return Inertia::render('Tiket/Riwayat', ['transaksi' => $transaksi]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('FormOrder');
    }

    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);
        return Inertia::render('Tickets/Show', ['ticket' => $ticket]);
    }

    public function pdf(Request $request, $id)
    {
        $ticket = Ticket::with(['rutes', 'kapals', 'jadwals', 'vehicles', 'passengers', 'transactions'])->where('id', $id)
            ->where('user_id', $request->user()->id)
            ->firstOrFail();
        return Inertia::render('Tiket/PDFPage', ['ticket' => $ticket]);
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
