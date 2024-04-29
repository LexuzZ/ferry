// resources/js/Components/SeatSelection.js

import UserLayout from "@/Layouts/UserLayout";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
UserLayout;
const SeatSelection = ({ seats }) => {
    const [selectedSeat, setSelectedSeat] = useState(null);

    const reserveSeat = (seatId) => {
        if (confirm("Apakah Anda yakin ingin memesan tempat duduk ini?")) {
            router.post(route("seats.reserve", seatId));
        }
    };

    return (
        <UserLayout>
            <div>
                <h2 className="mt-10 mb-5 font-bold text-center text-midnight">
                    Pilih Tempat Duduk/Tidur
                </h2>

                <ul className=""></ul>
                <div class="grid grid-cols-10 gap-10">
                    {seats.map((seat, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 bg-silver pe-4 text-midnight"
                        >
                            {seat.name}

                            {seat.available ? (
                                <button
                                    onClick={() => reserveSeat(seat.id)}
                                    className=" btn btn-circle"
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
