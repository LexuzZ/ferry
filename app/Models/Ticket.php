<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $table = "tickets";
    protected $fillable = ['jadwal_id','rute_id','kapal_id', 'code'];

    public function jadwals()
    {
        return $this->belongsTo(Jadwal::class, 'jadwal_id');
    }
    public function kapals()
    {
        return $this->belongsTo(Kapal::class, 'kapal_id');
    }
    public function Rutes()
    {
        return $this->belongsTo(Rute::class, 'rute_id');
    }
    
    public function seats(){
        return $this->hasMany(Seat::class);
    }
    public function passengers()
    {
        return $this->hasMany(Passenger::class);
    }

    public function vehicles()
    {
        return $this->hasMany(Vehicle::class);
    }

    
}
