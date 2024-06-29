<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'kapal_id',
        'jadwal_id',
        'seat_ids',
    ];
    protected $casts = [
        'seat_ids' => 'array', // Mengonversi JSON ke array otomatis
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function kapals()
    {
        return $this->belongsTo(Kapal::class);
    }

    public function jadwals()
    {
        return $this->belongsTo(Jadwal::class);
    }
    
}
