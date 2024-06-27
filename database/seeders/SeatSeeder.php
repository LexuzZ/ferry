<?php

namespace Database\Seeders;

use App\Models\Jadwal;
use App\Models\Kapal;
use App\Models\Seat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pastikan ada beberapa data kapal dan jadwal yang sudah ada
        $kapals = Kapal::all();
        $jadwals = Jadwal::all();

        if ($kapals->isEmpty() || $jadwals->isEmpty()) {
            $this->command->info('Tidak ada data kapal atau jadwal. Mohon isi tabel kapals dan jadwals terlebih dahulu.');
            return;
        }

        foreach ($kapals as $kapal) {
            foreach ($jadwals as $jadwal) {
                for ($i = 1; $i <= 200; $i++) { // 200 tempat duduk per jadwal
                    Seat::create([
                        'kapal_id' => $kapal->id,
                        'jadwal_id' => $jadwal->id,
                        'name' => 'Seat ' . $i,
                        'available' => true,
                    ]);
                }
            }
        }
    }
}
