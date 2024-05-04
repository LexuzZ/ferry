<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rute extends Model
{
    use HasFactory;
    protected $table = "rutes";
    protected $fillable = [
        'jadwal_id', 'kapal_id', 'nama_rute'
    ];
    public function jadwals()
    {
        return $this->belongsTo(Jadwal::class, 'jadwal_id');
    }

    public function kapals()
    {
        return $this->belongsTo(Kapal::class, 'kapal_id');
    }
}
