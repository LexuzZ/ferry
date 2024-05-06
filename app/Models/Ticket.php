<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    public function jadwals()
    {
        return $this->belongsTo(Jadwal::class);
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
