import UserLayout from "@/Layouts/UserLayout";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import "../../css/orders.css";
import { Inertia } from "@inertiajs/inertia";

const FormOrder = () => {
    const { jadwal, ticket, user, flash, jadwals, kapals, rutes, seat } =
        usePage().props;

    const { data, setData, post, errors } = useForm({
        jadwal_id: jadwal.id,
        kapal_id: jadwal.kapal_id,
        rute_id: jadwal.rute_id,
        nama: "",
        ktp: "",
        passengers: [{ category: "dewasa" }],
        vehicles: [{ type: "truk" }],
    });
    console.log(seat);

    const handlePassengerChange = (index, field, value) => {
        const newPassengers = data.passengers.slice();
        newPassengers[index][field] = value;
        setData("passengers", newPassengers);
    };

    const handleVehicleChange = (index, field, value) => {
        const newVehicles = data.vehicles.slice();
        newVehicles[index][field] = value;
        setData("vehicles", newVehicles);
    };

    const addPassenger = () => {
        setData("passengers", [...data.passengers, { category: "dewasa" }]);
    };

    const addVehicle = () => {
        setData("vehicles", [...data.vehicles, { type: "mobil" }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ticket.store"));
    };


    return (
        <UserLayout>
            {flash.message && (
                <div
                    className="flex items-center pt-24 text-center text-sm text-midnight rounded-lg  dark:text-green"
                    role="alert"
                >
                    <svg
                        className="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org0/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Success alert!</span>{" "}
                        {flash.message}
                    </div>
                </div>
            )}
            <div className="flex items-center  justify-center min-h-screen pt-24">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray">
                            Booking Tiket
                        </h2>
                        <p className="text-gray mb-6">
                            Isi form reservasi tiket dibawah.
                        </p>

                        <Link
                            className=" px-4 py-2 mb-6 font-semibold text-white bg-red rounded-md hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            href="/userDashboard"
                        >
                            Kembali
                        </Link>
                        <form
                            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 mt-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray">
                                    <p className="font-medium text-lg mb-4">
                                        Detail Form Tiket
                                    </p>
                                    <p>{jadwal.kapals.nama_kapal}</p>
                                    <p>{jadwal.rutes.nama_rute}</p>
                                    <p>
                                        {new Date(
                                            jadwal.tanggal
                                        ).toLocaleDateString()}
                                    </p>
                                    <p>{jadwal.tiba}</p>
                                    <p>{jadwal.keberangkatan}</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label
                                                htmlFor="full_name"
                                                className="text-midnight"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="full_name"
                                                id="full_name"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                defaultValue=""
                                                placeholder="cth: John Lehman"
                                                onChange={(e) =>
                                                    setData(
                                                        "nama",
                                                        e.target.value
                                                    )
                                                }
                                                value={data.nama}
                                            />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label
                                                htmlFor="full_name"
                                                className="text-midnight"
                                            >
                                                No. KTP
                                            </label>
                                            <input
                                                type="text"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                defaultValue=""
                                                placeholder="cth : 52020XXXXXX"
                                                onChange={(e) =>
                                                    setData(
                                                        "ktp",
                                                        e.target.value
                                                    )
                                                }
                                                value={data.ktp}
                                            />
                                        </div>

                                        <div className="md:col-span-2 ">
                                            <label
                                                htmlFor="country"
                                                className="text-midnight my-2"
                                            >
                                                Penumpang / Passengers
                                            </label>

                                            {data.passengers.map(
                                                (passenger, index) => (
                                                    <div key={index}>
                                                        <select
                                                            className="select w-full  max-w-xs mb-2 appearance-none outline-none text-midnight  bg-grey"
                                                            value={
                                                                passenger.category
                                                            }
                                                            onChange={(e) =>
                                                                handlePassengerChange(
                                                                    index,
                                                                    "category",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option value="dewasa">
                                                                Dewasa
                                                            </option>
                                                            <option value="anak">
                                                                Anak
                                                            </option>
                                                        </select>
                                                        {errors.passengers &&
                                                            errors.passengers[
                                                                index
                                                            ] && (
                                                                <div>
                                                                    {
                                                                        errors
                                                                            .passengers[
                                                                            index
                                                                        ]
                                                                    }
                                                                </div>
                                                            )}
                                                    </div>
                                                )
                                            )}
                                            <div className="my-4">
                                                <button
                                                    type="button"
                                                    onClick={addPassenger}
                                                    className="py-2 px-2 rounded-md font-serif bg-grey  text-midnight hover:bg-transparent"
                                                >
                                                    Tambah Penumpang
                                                </button>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label
                                                htmlFor="state"
                                                className="text-midnight"
                                            >
                                                Kendaraan / Vehicles
                                            </label>
                                            {data.vehicles.map(
                                                (vehicle, index) => (
                                                    <div key={index}>
                                                        <select
                                                            className="select w-full mb-2  max-w-xs bg-grey text-midnight flex items-center justify-center"
                                                            value={vehicle.type}
                                                            onChange={(e) =>
                                                                handleVehicleChange(
                                                                    index,
                                                                    "type",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option value="mobil">
                                                                Mobil
                                                            </option>
                                                            <option value="sepeda_motor">
                                                                Sepeda Motor
                                                            </option>
                                                            <option value="truk">
                                                                Truk
                                                            </option>
                                                        </select>
                                                        {errors.vehicles &&
                                                            errors.vehicles[
                                                                index
                                                            ] && (
                                                                <div>
                                                                    {
                                                                        errors
                                                                            .vehicles[
                                                                            index
                                                                        ]
                                                                    }
                                                                </div>
                                                            )}
                                                    </div>
                                                )
                                            )}
                                            <button
                                                type="button"
                                                onClick={addVehicle}
                                                className="py-2 px-2 my-4 rounded-md font-serif bg-grey text-midnight hover:bg-transparent"
                                            >
                                                Tambah Kendaraan
                                            </button>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="state mr-5"
                                                className="text-midnight"
                                            >
                                                No. Seat
                                            </label>
                                            <Link href={`/seats/${jadwal.kapal_id}`} className="btn bg-grey">pilih</Link>
                                           
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <button
                                                    className="w-full px-4 py-2 mb-5 font-semibold text-white bg-green rounded-md hover:bg-metal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                    type="submit"
                                                >
                                                    Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <h1 className="text-center pt-4 font-semibold text-midnight">
                Riwayat Order
            </h1>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ticket.map((t) => (
                        <div className="card cart" key={t.id}>
                            <div className="">
                                <label className="title uppercase  text-gray">
                                    {t.rutes.nama_rute}
                                </label>
                                <div className="steps">
                                    <div className="step">
                                        <div className="font-mono">
                                            <p>
                                                Nama Kapal :{" "}
                                                {t.kapals.nama_kapal}
                                            </p>
                                            <p className=" text-gray">
                                                Kode Tiket : {t.code}
                                            </p>
                                            <p className=" text-gray">
                                                Tanggal :{" "}
                                                {new Date(
                                                    t.jadwals.tanggal
                                                ).toLocaleDateString()}
                                            </p>
                                            <p className=" text-gray">
                                                ETD : {t.jadwals.tiba}
                                            </p>
                                            <p className=" text-gray">
                                                ETA : {t.jadwals.keberangkatan}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="payments">
                                    <span className="text-midnight font-bold ml-40">
                                        PAYMENT
                                    </span>
                                    <div className="details mx-10">
                                        <ul>
                                            {t.passengers.map((p) => (
                                                <li
                                                    key={p.id}
                                                    className=" text-gray"
                                                >
                                                    {p.category}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {t.passengers.map((p) => (
                                                <li
                                                    key={p.id}
                                                    className=" text-gray"
                                                >
                                                    {p.price}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {t.vehicles.map((p) => (
                                                <li
                                                    key={p.id}
                                                    className=" text-gray"
                                                >
                                                    {p.type}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {t.vehicles.map((p) => (
                                                <li
                                                    key={p.id}
                                                    className=" text-gray"
                                                >
                                                    {p.price}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="card checkout">
                                    <div className="footer">
                                        <Link
                                            className="checkout-btn"
                                            href={`/payment/${t.id}`}
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </UserLayout>
    );
};

export default FormOrder;
