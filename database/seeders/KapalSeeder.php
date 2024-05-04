<?php

namespace Database\Seeders;

use App\Models\Kapal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KapalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for ($i = 1; $i <= 4; $i++) {
            Kapal::create([
                'rute_id' => rand(1, 4),
                'nama_kapal' => 'DLN ' . $i,
                // Tambahkan kolom lainnya sesuai kebutuhan
            ]);
        }
    }
}
