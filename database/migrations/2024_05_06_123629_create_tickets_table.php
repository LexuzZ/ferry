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
            $table->unsignedBigInteger('kapal_id');
            $table->unsignedBigInteger('rute_id');
            $table->string('code')->unique();
            $table->string('nama');
            $table->string('ktp');
            $table->timestamps();
            $table->foreign('jadwal_id')->references('id')->on('jadwals')->onDelete('cascade');
            $table->foreign('kapal_id')->references('id')->on('kapals')->onDelete('cascade');
            $table->foreign('rute_id')->references('id')->on('rutes')->onDelete('cascade');
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
