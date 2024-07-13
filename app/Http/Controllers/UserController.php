<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userCount = User::count();
        $userList = User::latest()->paginate(5);
        $totalTransaction = Transaction::where('status', 'paid')->count();
        $totalTransactionPending = Transaction::where('status', 'pending')->count();
        $transaction = Transaction::with('tickets')->get();
        return Inertia::render('Dashboard', [
            'userCount' => $userCount,
            'userList' => $userList,
            'totalTransaction' => $totalTransaction,
            'transactionPending' => $totalTransactionPending,
            'transaction' => $transaction

        ]);
    }
    // public function download()
    // {
    //     // Contoh data yang akan diunduh
    //     $data = Transaction::with('tickets')->get();

    //     // Mengonversi data ke format CSV
    //     $csvData = fopen('php://temp', 'r+');
    //     foreach ($data as $row) {
    //         fputcsv($csvData, $row);
    //     }
    //     rewind($csvData);
        
    //     // Mengembalikan response untuk mengunduh file CSV
    //     return response()->streamDownload(function () use ($csvData) {
    //         fpassthru($csvData);
    //     }, 'data.csv', [
    //         'Content-Type' => 'text/csv',
    //         'Content-Disposition' => 'attachment; filename="data.csv"',
    //     ]);
    // }
   

    public function userlist()
    {
        return Inertia::render('User', ['users' => User::latest()->paginate(10)]);
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
