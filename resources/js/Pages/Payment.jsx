// resources/js/Pages/Payment.jsx
import React, { useEffect } from "react";
import UserLayout from "@/Layouts/UserLayout";
import "../../css/card.css";
import { Link } from "@inertiajs/react";

const Payment = ({ ticket, snapToken, user, passengers }) => {
    const handlePayment = () => {
        window.snap.pay(snapToken, {
            onSuccess: function (result) {
                window.location.href = "/invoice/";
                console.log("success", result);
            },
            onPending: function (result) {
                console.log("pending", result);
            },
            onError: function (result) {
                console.log("error", result);
            },
            onClose: function () {
                console.log(
                    "customer closed the popup without finishing the payment"
                );
            },
        });
    };
    const numbers = [1, 2, 3, 4, 5];

    // Menghitung total dari semua angka

    const totalPassengerPrice = ticket.passengers.reduce(
        (acc, passenger) => acc + passenger.price,
        0
    );
    const totalVehiclePrice = ticket.vehicles.reduce(
        (sum, vehicle) => sum + vehicle.price,
        0
    );
    const totalPrice = totalPassengerPrice + totalVehiclePrice;

    return (
        <UserLayout>
            <>
                {/* component */}
                <div className="flex min-h-screen w-full items-center justify-center bg-silver pt-20 pb-7 rounded-lg">
                    <div className="w-100 rounded bg-white px-6 pt-8 shadow-lg">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h4 className="font-semibold text-gray">
                                Detail Tiket
                            </h4>
                            <p className="text-md text-gray">
                                Damai Lautan Nusantara
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 border-b py-6 text-md font-normal">
                            <p className="flex justify-between">
                                <span className="text-gray font-bold">
                                    Code Booking :
                                </span>
                                <span className="text-gray ml-3">{ticket.code}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray font-bold">
                                    Order ID:
                                </span>
                                <span className="text-gray">{ticket.id}</span>
                            </p>

                            <p className="flex justify-between">
                                <span className="text-gray font-bold">
                                    Customer:
                                </span>
                                <span className="text-gray">{ticket.nama}</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 pb-6 pt-2 text-md">
                            <table className="w-full text-left text-gray font-normal">
                                <thead>
                                    <tr className="flex">
                                        <th className="w-full py-2">
                                            Kategori Tiket
                                        </th>

                                        <th className="min-w-[44px] py-2">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ul className="flex py-1">
                                        <li className="flex-1">Penumpang : {ticket.totalPenumpang}</li>
                                        
                                            {new Intl.NumberFormat("id", {
                                                style: "currency",
                                                currency: "IDR",
                                                maximumFractionDigits: 0,
                                            }).format(totalPassengerPrice)}
                                        
                                    </ul>
                                    <ul className="flex py-1">
                                        {ticket.vehicles.map((vehicle) => (
                                            <li
                                                key={vehicle.id}
                                                className="flex-1"
                                            >
                                                {vehicle.type}
                                            </li>
                                        ))}

                                        {new Intl.NumberFormat("id", {
                                            style: "currency",
                                            currency: "IDR",
                                            maximumFractionDigits: 0,
                                        }).format(totalVehiclePrice)}
                                    </ul>
                                </tbody>
                            </table>

                            <div className=" border-b border border-dashed" />
                            <p className="flex items-center justify-left text-gray font-semibold">
                                Total :{" "}
                                {new Intl.NumberFormat("id", {
                                    style: "currency",
                                    currency: "IDR",
                                    maximumFractionDigits: 0,
                                }).format(totalPrice)}
                            </p>
                            <div className="py-4 justify-center items-center flex flex-col gap-2">
                                <button
                                    onClick={handlePayment}
                                    className="card-button flex items-center justify-center font-serif text-gray hover:bg-green"
                                >
                                    Bayar Sekarang
                                </button>
                                <Link
                                    href={`/riwayat`}
                                    className="card-button flex items-center justify-center font-serif text-gray hover:bg-red"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            {/* <div className="flex items-center justify-center pt-24">
                <div className="pt-24 text-midnight card">
                    <p className="text-title text-center">Detail Tiket</p>
                    <p className="text-body font-serif">
                        Kode Tiket: {ticket.code}
                    </p>
                    <p className="text-title">Penumpang</p>
                    <ul>
                        {ticket.passengers.map((passenger) => (
                            <li key={passenger.id} className="text-body">
                                {passenger.name} - {passenger.category} - Rp{" "}
                                {passenger.price}
                            </li>
                        ))}
                    </ul>
                    <p className="text-title">Kendaraan</p>
                    <ul>
                        {ticket.vehicles.map((vehicle) => (
                            <li key={vehicle.id} className="text-body">
                                {vehicle.type} - Rp {vehicle.price}
                            </li>
                        ))}
                    </ul>
                    <div className="card-footer"></div>
                    <h3>Total Harga: Rp {totalPrice}</h3>
                    <button
                        onClick={handlePayment}
                        className="card-button flex items-center justify-center"
                    >
                        Bayar Sekarang
                    </button>
                </div>
            </div> */}
        </UserLayout>
    );
};

export default Payment;
