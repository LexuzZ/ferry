<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kapal extends Model
{
    use HasFactory;
    protected $table = "kapals";
    protected $fillable = [
        'rute_id', 'nama_kapal'
    ];
    public function rutes()
    {
        return $this->belongsTo(Rute::class, 'rute_id');
    }
    public function jadwals()
    {
        return $this->hasMany(Jadwal::class);
    }
    public function seats(){
        return $this->hasMany(Seat::class);
    }
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
