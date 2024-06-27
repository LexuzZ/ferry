<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;
    protected $table = "jadwals";
    protected $fillable = ['rute_id','kapal_id', 'tanggal', 'tiba', 'keberangkatan'];

    

    // Definisikan relasi dengan tabel Kapal
    public function rutes()
    {
        return $this->belongsTo(Rute::class, 'rute_id');
    }
    public function kapals()
    {
        return $this->belongsTo(Kapal::class, 'kapal_id');
    }
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
    public function seats()
    {
        return $this->hasMany(Seat::class);
    }
    
}
