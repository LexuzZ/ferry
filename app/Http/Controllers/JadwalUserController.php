<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Rute;
use App\Models\Seat;
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
            ->leftJoin('seats', function ($join) {
                $join->on('jadwals.id', '=', 'seats.jadwal_id')
                    ->on('kapals.id', '=', 'seats.kapal_id');
            })
            ->select(
                'jadwals.id',
                'jadwals.rute_id',
                'jadwals.kapal_id',
                'jadwals.tanggal',
                'jadwals.tiba',
                'jadwals.keberangkatan',
                'rutes.nama_rute',
                'kapals.nama_kapal',
                DB::raw('COUNT(seats.id) as total_seats'),
                DB::raw('SUM(seats.available) as total_available_seats'),
                DB::raw('SUM(CASE WHEN seats.available = 1 THEN 1 ELSE 0 END) as total_available'),
                DB::raw('SUM(CASE WHEN seats.available = 0 THEN 1 ELSE 0 END) as total_unavailable')
            )
            ->groupBy(
                'jadwals.id',
                'jadwals.rute_id',
                'jadwals.kapal_id',
                'jadwals.tanggal',
                'jadwals.tiba',
                'jadwals.keberangkatan',
                'rutes.nama_rute',
                'kapals.nama_kapal'
            );
        // ->select('jadwals.*', 'rutes.nama_rute', 'kapals.nama_kapal');

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
            'total' => $jadwal->total(),

        ]);
    }
    public function order(Request $request, $id)
    {
        $jadwal = Jadwal::with('rutes', 'kapals')->findOrFail($id);
        // $reservedSeats = $jadwal->seats->where('available', false)->values();
        $reservedSeats = $jadwal->seats->where('user_id', $request->user()->id)->where('available', false)->values();

        $tickets = Ticket::with(['rutes', 'kapals', 'jadwals'])
            ->where('user_id', $request->user()->id)
            ->get();

        $tickets->map(function ($ticket) {
            $totalVehiclePrice = $ticket->vehicles->sum('price');
            $totalPassengerPrice = $ticket->passengers->sum('price');
            $totalPrice = $totalVehiclePrice + $totalPassengerPrice;
            $totalDewasa = $ticket->passengers->where('category', 'dewasa')->count();
            $totalAnak = $ticket->passengers->where('category', 'anak')->count();
            $totalPenumpang = $totalDewasa + $totalAnak;
            $totalSepedaMotor = $ticket->vehicles->where('type', 'sepeda_motor')->count();
            $totalMobil = $ticket->vehicles->where('type', 'mobil')->count();
            $totalTruk = $ticket->vehicles->where('type', 'truk')->count();
            $totalKendaraan = $totalSepedaMotor + $totalMobil + $totalTruk;
            $ticket->totalVehiclePrice = $totalVehiclePrice;
            $ticket->totalPassengerPrice = $totalPassengerPrice;
            $ticket->totalPrice = $totalPrice;
            $ticket->totalDewasa = $totalDewasa;
            $ticket->totalAnak = $totalAnak;
            $ticket->totalPenumpang = $totalPenumpang;
            $ticket->totalKendaraan = $totalKendaraan;

            return $ticket;
        });
        return Inertia::render('FormOrder',  [
            'jadwal' => $jadwal,
            'ticket' => $tickets,
            'reservedSeats' => $reservedSeats,




        ]);
    }
    public function history(Request $request)
    {
        $tickets = Ticket::with(['rutes', 'kapals', 'jadwals'])
            ->where('user_id', $request->user()->id)
            ->get();

        $tickets->map(function ($ticket) {
            $totalVehiclePrice = $ticket->vehicles->sum('price');
            $totalPassengerPrice = $ticket->passengers->sum('price');
            $totalPrice = $totalVehiclePrice + $totalPassengerPrice;

            $totalDewasa = $ticket->passengers->where('category', 'dewasa')->count();
            $totalAnak = $ticket->passengers->where('category', 'anak')->count();
            $totalPenumpang = $totalDewasa + $totalAnak;
            $totalSepedaMotor = $ticket->vehicles->where('type', 'sepeda_motor')->count();
            $totalMobil = $ticket->vehicles->where('type', 'mobil')->count();
            $totalTruk = $ticket->vehicles->where('type', 'truk')->count();
            $totalKendaraan = $totalSepedaMotor + $totalMobil + $totalTruk;

            // Menambahkan data tambahan ke dalam objek tiket
            $ticket->totalVehiclePrice = $totalVehiclePrice;
            $ticket->totalPassengerPrice = $totalPassengerPrice;
            $ticket->totalPrice = $totalPrice;
            $ticket->totalDewasa = $totalDewasa;
            $ticket->totalAnak = $totalAnak;
            $ticket->totalPenumpang = $totalPenumpang;
            $ticket->totalKendaraan = $totalKendaraan;

            return $ticket;
        });
        return Inertia::render('RiwayatOrder',  [
            'ticket' => $tickets,
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
        $userId = $request->user()->id;
        $reservedSeats = Seat::where('user_id', $userId)
            ->where('available', false)
            ->where('jadwal_id', $ticket->jadwal_id)
            ->where('kapal_id', $ticket->kapal_id)
            ->get();
        return Inertia::render('Tiket/PDFPage', [
            'ticket' => $ticket,
            'reservedSeats' => $reservedSeats,
        ]);
    }
}
