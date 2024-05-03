<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rute extends Model
{
    use HasFactory;
    protected $table = "rutes";
    protected $fillable = [
        'jadwal_id', 'asal', 'tujuan'
    ];

    public function kapals()
    {
        return $this->belongsTo(Kapal::class);
    }

    public function rutes()
    {
        return $this->belongsTo(Rute::class);
    }
}
