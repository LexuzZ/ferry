<?php

namespace Database\Seeders;

use App\Models\Jadwal;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JadwalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for ($i = 1; $i <= 20; $i++) {
            Jadwal::create([
                 // ID kapal akan dipilih secara acak antara 1 dan 10
                 'rute_id' => rand(1, 4),
                 'kapal_id' => rand(1, 4),
                'tanggal' => Carbon::now()->addDays($i)->format('Y-m-d'), // ID kapal akan dipilih secara acak antara 1 dan 10
                'tiba' => now()->addDays($i)->setHour(rand(8, 12))->setMinute(rand(0, 59)), // Waktu berangkat akan ditetapkan ke hari-hari berikutnya dengan jam acak antara 8 dan 12
                'keberangkatan' => now()->addDays($i)->setHour(rand(13, 18))->setMinute(rand(0, 59)), // Waktu sampai akan ditetapkan ke hari-hari berikutnya dengan jam acak antara 13 dan 18
            ]);
        }
    }
}
