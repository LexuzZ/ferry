<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
    protected $fillable = ['type', 'ticket_id', 'price'];
    public function tickets()
    {
        return $this->belongsTo(Ticket::class);
    }
    public static function boot()
    {
        parent::boot();

        static::creating(function ($vehicle) {
            switch ($vehicle->type) {
                case 'truk':
                    $vehicle->price = 150000;
                    break;
                case 'mobil':
                    $vehicle->price = 200000;
                    break;
                case 'sepeda_motor':
                    $vehicle->price = 50000;
                    break;
                default:
                    throw new \Exception('Invalid vehicle type');
            }
        });
    }
}
