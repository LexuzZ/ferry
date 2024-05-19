// resources/js/Pages/Payment.jsx
import React, { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import UserLayout from '@/Layouts/UserLayout';

const Payment = ({ ticket, snapToken }) => {
    

    const handlePayment = () => {
        window.snap.pay(snapToken, {
            onSuccess: function(result) {
                console.log('success', result);
            },
            onPending: function(result) {
                console.log('pending', result);
            },
            onError: function(result) {
                console.log('error', result);
            },
            onClose: function() {
                console.log('customer closed the popup without finishing the payment');
            }
        });
    };

    const totalPrice = ticket.passengers.reduce((sum, p) => sum + p.price, 0) + ticket.vehicles.reduce((sum, v) => sum + v.price, 0);

    return (
        <UserLayout>
            <h1>Detail Tiket</h1>
            <p>Kode Tiket: {ticket.code}</p>
            <h2>Penumpang</h2>
            <ul>
                {ticket.passengers.map(passenger => (
                    <li key={passenger.id}>
                        {passenger.name} - {passenger.category} - Rp {passenger.price}
                    </li>
                ))}
            </ul>
            <h2>Kendaraan</h2>
            <ul>
                {ticket.vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        {vehicle.type} - Rp {vehicle.price}
                    </li>
                ))}
            </ul>
            <h3>Total Harga: Rp {totalPrice}</h3>
            <button onClick={handlePayment}>Bayar Sekarang</button>
        </UserLayout>
    );
};

export default Payment;
