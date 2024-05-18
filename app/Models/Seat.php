<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;
    protected $fillable = ['ticket_id','kapal_id','name', 'available']; // Kolom yang bisa diisi

    public function kapals()
    {
        return $this->belongsTo(Kapal::class);
    }
    public function tickets()
    {
        return $this->belongsTo(Ticket::class);
    }
    
    
}
