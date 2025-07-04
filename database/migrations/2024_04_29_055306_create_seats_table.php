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
        Schema::create('seats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kapal_id');
            $table->unsignedBigInteger('jadwal_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('name');
            $table->boolean('available')->default(true); // Menandai ketersediaan tempat duduk
            $table->foreign('kapal_id')->references('id')->on('kapals')->onDelete('cascade');
            $table->foreign('jadwal_id')->references('id')->on('jadwals')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seats');
    }
};
