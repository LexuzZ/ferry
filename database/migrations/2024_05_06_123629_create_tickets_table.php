<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('jadwal_id');
            $table->enum('penumpang', ['Dewasa', 'Anak-anak', 'Balita']);
            $table->enum('kendaraan', ['Sepeda', 'Sepeda Motor s.d 250cc', 'Sepeda Motor s.d 1000cc', 'Sepeda Motor s.d 1001cc', 'Kendaraan s.d 2000cc', 'Kendaraan 2001cc ke Atas', 'Kendaraan s.d s.d 3001cc', 'Truk Sedang', 'Truk Besar', 'Tronton', 'Alat Berat']);
            $table->timestamps();
            $table->foreign('jadwal_id')->references('id')->on('jadwals')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
