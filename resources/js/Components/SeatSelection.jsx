// resources/js/Components/SeatSelection.jsx

import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import UserLayout from "@/Layouts/UserLayout";
import Swal from "sweetalert2";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";


const SeatSelection = ({ seats, reservedSeats, kapal_id, jadwal_id, totalAvailableSeats, totalSeats, totalUnavailableSeats }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSelectSeat = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const reserveSeats = () => {
        if (selectedSeats.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "Peringatan",
                text: "Silakan pilih setidaknya satu tempat duduk.",
            });
            return;
        }

        Swal.fire({
            title: "Konfirmasi",
            text: "Apakah Anda yakin ingin memesan tempat duduk ini?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, Pesan!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.post(
                    route("seats.reserve"),
                    { kapal_id, jadwal_id, seat_ids: selectedSeats },
                    {
                        onSuccess: () => {
                            Swal.fire({
                                icon: "success",
                                title: "Berhasil",
                                text: "Tempat duduk berhasil dipesan.",
                            });
                        },
                        onError: (errors) => {
                            Swal.fire({
                                icon: "error",
                                title: "Gagal",
                                text: "Gagal memesan tempat duduk. Silakan coba lagi.",
                            });
                        },
                    }
                );
            }
        });
    };
    const goToOrderPage = () => {
        Inertia.get(route('order.ticket', { id: jadwal_id }));
    };

    return (
        <UserLayout>
            <div className="pt-20 pb-10">
                <p className="text-midnight ml-4">Note : Pilih Tempat Ranjang Sesuai No. Seat</p>
                <p className="text-midnight ml-4">Total Ranjang : {totalSeats}</p>
                <p className="text-midnight ml-4">Tersedia : {totalAvailableSeats}</p>
                <p className="text-midnight ml-4">Tidak Tersedia : {totalUnavailableSeats}</p>
                <div>
                    <button
                        onClick={reserveSeats}
                        className="my-5 mx-5 btn bg-green text-midnight hover:text-white"
                    >
                        Pesan
                    </button>
                    <button
                        onClick={goToOrderPage}
                        className="my-5 btn bg-red text-white"
                    >
                        Kembali
                    </button>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-4 ">
                    {seats.map((seat) => (
                        <div
                            key={seat.id}
                            onClick={() => toggleSelectSeat(seat.id)}
                            className={`p-5 flex justify-center items-center rounded-lg max-w-xs shadow-lg text-midnight cursor-pointer ${
                                selectedSeats.includes(seat.id)
                                    ? "bg-blue"
                                    : seat.available
                                    ? "bg-green"
                                    : "bg-red"
                            }`}
                        >
                            <MdAirlineSeatIndividualSuite size={20} className="me-4"/> {seat.name}
                            {!seat.available ? (
                                <span className="ml-4 text-red-500">
                                    Tidak Tersedia
                                </span>
                            ) : selectedSeats.includes(seat.id) ? (
                                <span className="ml-4 text-blue-500">
                                    Dipilih
                                </span>
                            ) : (
                                <span className="ml-4 text-green-500">
                                    Tersedia
                                </span>
                            )}
                        </div>
                    ))}
                </div>
              
            </div>
        </UserLayout>
    );
};

export default SeatSelection;
