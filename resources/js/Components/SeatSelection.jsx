// resources/js/Pages/Seats/Index.jsx

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import UserLayout from '@/Layouts/UserLayout';
import { Link } from '@inertiajs/react';

const SeatSelection = ({ seats, kapal_id, jadwal_id }) => {
    const reserveSeat = (seatId) => {
        if (confirm("Apakah Anda yakin ingin memesan tempat duduk ini?")) {
            Inertia.post(route("seats.reserve", { seat: seatId }), { kapal_id, jadwal_id });
        }
    };

    return (
        <UserLayout>
            <div>
                <h2 className="pt-20 mb-5 font-bold text-center text-xl text-midnight ">
                    Pilih Tempat Duduk
                </h2>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2 px-4">
                    {seats.map((seat) => (
                        <div
                            key={seat.id}
                            className={`p-5 flex justify-center items-center rounded-lg max-w-xs shadow-lg text-midnight cursor-pointer ${
                                seat.available ? "bg-green" : "bg-red"
                            }`}
                        >
                            No. Seat : {seat.name}
                            {!seat.available ? (
                                <span className="ml-4 text-red-500">Tidak Tersedia</span>
                            ) : (
                                <button
                                    onClick={() => reserveSeat(seat.id)}
                                    className="ml-4 btn flex justify-center items-center"
                                >
                                    Pesan
                                </button>
                            )}
                        </div>
                    ))}
                    <Link href='/order'>Kembali</Link>
                </div>
            </div>
        </UserLayout>
    );
};

export default SeatSelection;
