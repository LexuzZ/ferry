<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        \App\Models\Kapal::all()->each(function ($kapal) {
            for ($i = 1; $i <= 200; $i++) {
                $kapal->seats()->create([
                    'name' => " {$i}  ",
                    
                ]);
            }
        });
        
    }
}
