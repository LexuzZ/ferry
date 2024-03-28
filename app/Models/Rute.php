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

    public function jadwals()
    {
        return $this->belongsTo(Jadwal::class);
    }
}
