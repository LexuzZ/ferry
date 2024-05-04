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
        Schema::create('jadwals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rute_id');
            $table->date('tanggal');
            $table->time('tiba');
            $table->time('keberangkatan');
            // $table->enum('nama_kapal', ['DLN Oasis', 'DLN Batulayar', 'DLN Mandalika', 'DLN Nusantara']);
            $table->timestamps();
            $table->foreign('rute_id')->references('id')->on('rutes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jadwals');
    }
};
