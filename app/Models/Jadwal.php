<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;
    protected $fillable = ['rute_id', 'tanggal', 'tiba', 'keberangkatan'];
    public function rutes(){
        return $this->hasMany(Rute::class);
    }
    public function kapals(){
        return $this->belongsTo(Kapal::class);
    }

}
