<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'seat_id',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function seats()
    {
        return $this->belongsTo(Seat::class);
    }
}
