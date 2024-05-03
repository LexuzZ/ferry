<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;
    protected $table = "jadwals";
    protected $fillable = [ 'tanggal', 'tiba', 'keberangkatan'];

    public function rutes()
    {
        return $this->belongsTo(Rute::class);
    }

    // Definisikan relasi dengan tabel Kapal
    public function kapals()
    {
        return $this->belongsTo(Kapal::class);
    }
}
