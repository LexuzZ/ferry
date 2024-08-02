<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $fillable = ['ticket_id','user_id', 'midtrans_transaction_id', 'amount', 'status'];

    /**
     * Get the ticket that owns the transaction.
     */
    public function tickets()
    {
        return $this->belongsTo(Ticket::class, 'ticket_id');
    }
    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    const STATUS_UNPAID = 'unpaid';
    const STATUS_PENDING = 'pending';
    const STATUS_PAID = 'paid';
}
