<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kapal extends Model
{
    use HasFactory;
    protected $table = "kapals";
    protected $fillable = [
         'jadwal_id','nama_kapal'
    ];
    public function jadwals()
    {
        return $this->belongsToMany(Jadwal::class, 'rute');
    }
    public function seats(){
        return $this->hasMany(Seat::class);
    }
}
