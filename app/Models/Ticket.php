<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $table = "tickets";
    protected $fillable = ['jadwal_id', 'penumpang', 'kendaraan'];

    public function jadwals()
    {
        return $this->belongsTo(Jadwal::class);
    }
    
    public function seats(){
        return $this->hasMany(Seat::class);
    }
    
}
