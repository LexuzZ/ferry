<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;
    protected $fillable = ['kapal_id', 'name', 'available']; // Kolom yang bisa diisi

    public function kapals()
    {
        return $this->belongsTo(Kapal::class);
    }
    
}
