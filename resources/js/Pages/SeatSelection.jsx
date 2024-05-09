// resources/js/Components/SeatSelection.js

import UserLayout from "@/Layouts/UserLayout";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
UserLayout;
const SeatSelection = ({ seats }) => {
    console.log(seats);
    const [selectedSeat, setSelectedSeat] = useState(null);

    const reserveSeat = (seatId) => {
        if (confirm("Apakah Anda yakin ingin memesan tempat duduk ini?")) {
            router.post(route("seats.reserve", seatId));
        }
    };

    return (
        <UserLayout>
            <div>
                <h2 className="pt-20 mb-5 font-bold text-center text-xl text-midnight">
                    Pilih Tempat Tidur
                </h2>
                <div className="grid grid-cols-5 gap-5">
                    {seats.map((seat, index) => (
                        <div  className="p-5 flex justify-center items-center rounded-lg max-w-xs shadow-lg text-midnight">
                            No. Seat : {seat.name}
                            {seat.available ? (
                                <button
                                    onClick={() => reserveSeat(seat.id)}
                                    className="ms-4 btn flex justify-center items-center "
                                >
                                    Pesan
                                </button>
                            ) : (
                                <span>Tidak Tersedia</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </UserLayout>
    );
};

export default SeatSelection;
