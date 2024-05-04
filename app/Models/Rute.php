<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rute extends Model
{
    use HasFactory;
    protected $table = "rutes";
    protected $fillable = [
         'nama_rute'
    ];
    public function jadwals()
    {
        return $this->hasMany(Jadwal::class);
    }

    public function kapals()
    {
        return $this->hasMany(Kapal::class);
    }
}
