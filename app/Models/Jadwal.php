<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;
    protected $table = "jadwals";
    protected $fillable = ['rute_id', 'tanggal', 'tiba', 'keberangkatan'];

    

    // Definisikan relasi dengan tabel Kapal
    public function rutes()
    {
        return $this->belongsTo(Rute::class);
    }
    
}
