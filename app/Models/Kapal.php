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
        return $this->belongsTo(Rute::class);
    }
    public function seats(){
        return $this->hasMany(Seat::class);
    }
}
