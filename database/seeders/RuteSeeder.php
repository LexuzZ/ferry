<?php

namespace Database\Seeders;

use App\Models\Rute;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RuteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for ($i = 1; $i <= 4; $i++) {
            Rute::create([
                // 'jadwal_id' => rand(1, 20),
                // 'kapal_id' => rand(1, 4),
                'nama_rute' => 'Rute ' . $i,
                // Tambahkan kolom lainnya sesuai kebutuhan
            ]);
        }
    }
}
