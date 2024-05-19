<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    use HasFactory;
    protected $fillable = [ 'category', 'ticket_id', 'price'];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($passenger) {
            $passenger->price = $passenger->category === 'dewasa' ? 185000 : 75000;
        });
    }
    public function tickets()
    {
        return $this->belongsTo(Ticket::class);
    }
}
