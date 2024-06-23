// resources/js/Components/SeatSelection.js

import React from "react";
import { Inertia } from "@inertiajs/inertia";
import UserLayout from "@/Layouts/UserLayout";

const SeatSelection = ({ seats, kapal_id }) => {
    const reserveSeat = (seatId) => {
        if (confirm("Apakah Anda yakin ingin memesan tempat duduk ini?")) {
            Inertia.post(route("seats.reserve", seatId));
        }
    };

    return (
        <UserLayout>
            <div>
                <h2 className="pt-20 mb-5 font-bold text-center text-xl text-midnight">
                    Pilih Tempat Duduk
                </h2>
                <div className="grid grid-cols-5 gap-5">
                    {seats.map((seat) => (
                        <div key={seat.id} className="p-5 flex justify-center items-center rounded-lg max-w-xs shadow-lg text-midnight">
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
                </div>
            </div>
        </UserLayout>
    );
};

export default SeatSelection;
