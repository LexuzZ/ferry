import UserLayout from "@/Layouts/UserLayout";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import "../../css/orders.css";
import { Inertia } from "@inertiajs/inertia";

const FormOrder = () => {
    const { jadwal, ticket, flash, reservedSeats, auth } = usePage().props;

    useEffect(() => {
        if (!auth.user) {
            Inertia.get(route("login"));
        }
    }, [auth.user]);
    const { data, setData, post, errors } = useForm({
        jadwal_id: jadwal.id,
        kapal_id: jadwal.kapal_id,
        rute_id: jadwal.rute_id,
        nama: "",
        ktp: "",
        passengers: [{ category: "dewasa" }],
        vehicles: [{ type: "truk" }],
    });

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
    const removeVehicle = (index) => {
        const newVehicles = [...data.vehicles];
        newVehicles.splice(index, 1);
        setData("vehicles", newVehicles);
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
            <div className="flex items-center sm:mx-2 px-2 justify-center min-h-screen pt-24">
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
                            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 mt-4 ms:mx-4 "
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

                                    {reservedSeats.map((seat) => (
                                        <ul key={seat.id}>
                                            <li> No. Seat : {seat.name}</li>
                                        </ul>
                                    ))}
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
                                            <div className="my-2">
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
                                                htmlFor="vehicles"
                                                className="text-midnight"
                                            >
                                                Kendaraan / Vehicles (Optional)
                                            </label>
                                            {data.vehicles.map(
                                                (vehicle, index) => (
                                                    <div key={index}>
                                                        <select
                                                            className="select w-full max-w-xs mb-2 appearance-none outline-none text-midnight bg-grey"
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
                                                            <option value="sepeda_motor">
                                                                Sepeda Motor
                                                            </option>
                                                            <option value="mobil">
                                                                Mobil
                                                            </option>
                                                            <option value="truk">
                                                                Truk
                                                            </option>
                                                        </select>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeVehicle(
                                                                    index
                                                                )
                                                            }
                                                            className="py-2 px-2 rounded-md font-serif bg-red text-white hover:bg-darkred"
                                                        >
                                                            Hapus Kendaraan
                                                        </button>
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
                                            <div className="my-2">
                                                <button
                                                    type="button"
                                                    onClick={addVehicle}
                                                    className="py-2 px-2 rounded-md font-serif bg-grey text-midnight hover:bg-transparent"
                                                >
                                                    Tambah Kendaraan
                                                </button>
                                            </div>
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="state "
                                                className="text-midnight"
                                            >
                                                No. Seat
                                            </label>
                                            <Link
                                                href={`/seats/${jadwal.kapal_id}/${jadwal.id}`}
                                                className="btn bg-grey  px-2 text-midnight font-normal hover:text-white    flex items-center justify-center"
                                            >
                                                Pilih Tempat Tidur
                                            </Link>
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
        </UserLayout>
    );
};

export default FormOrder;
