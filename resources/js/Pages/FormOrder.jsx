import UserLayout from "@/Layouts/UserLayout";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../css/orders.css";

const FormOrder = () => {
    const { jadwal, ticket, user, flash, order } = usePage().props;
    // console.log(order);
    const { data, setData, post, errors } = useForm({
        jadwal_id: "",
        rute_id: "",
        kapal_id: "",
        code: "",
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
                        xmlns="http://www.w3.org/2000/svg"
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
            <div className="flex items-center justify-center min-h-screen pt-24">
                <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-midnight">
                        DAMAI LAUTAN NUSANTARA
                    </h2>
                    <p className="text-center text-gray">
                        Isi form reservasi tiket dibawah dengan benar!
                    </p>
                    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="first_name"
                            >
                                Nama Pemesan :{" "}
                                <h1 className="badge badge-neutral">
                                    {user.name}
                                </h1>
                            </label>
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="first_name"
                            >
                                Email Pemesan :{" "}
                                <h1 className="badge badge-neutral">
                                    {user.email}
                                </h1>
                            </label>
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                ID Jadwal :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.id}
                                </h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                ID Rute :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.rute_id}
                                </h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                ID Kapal :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.kapal_id}
                                </h1>
                            </label>
                        </div>

                        {/* <select
                            className="select w-full  max-w-xs bg-grey text-midnight flex items-center justify-center"
                            value={data.rute_id}
                            onChange={(e) => setData("rute_id", e.target.value)}
                        >
                            <option value="rute_id">rute</option>
                        </select>
                        <select
                            className="select w-full  max-w-xs bg-grey text-midnight flex items-center justify-center"
                            value={data.kapal_id}
                            onChange={(e) =>
                                setData("kapal_id", e.target.value)
                            }
                        >
                            <option value="">Pilih</option>
                            <option value="kapal_id">kapal</option>
                        </select>
                        <select
                            className="select w-full  max-w-xs bg-grey text-midnight flex items-center justify-center"
                            value={data.jadwal_id}
                            onChange={(e) =>
                                setData("jadwal_id", e.target.value)
                            }
                        >
                            <option value={data.jadwal_id}>jadwal id</option>
                        </select> */}
                        <div>
                            <label
                                htmlFor="jenis_penumpang"
                                className="block text-sm font-medium text-gray"
                            >
                                Sesuaikan berdasarkan ID Jadwal di atas
                            </label>

                            <input
                                type="number"
                                // id="default-search"
                                className="input input-bordered w-full max-w-xs bg-grey text-midnight"
                                placeholder={jadwal.id}
                                // required
                                onChange={(e) =>
                                    setData("jadwal_id", e.target.value)
                                }
                                value={data.jadwal_id}
                            />
                            <p className="text-red text-sm mt-2">
                                {errors.jadwal_id}
                            </p>
                        </div>
                        <div>
                            <label
                                htmlFor="jenis_penumpang"
                                className="block text-sm font-medium text-gray"
                            >
                                Sesuaikan berdasarkan ID Jadwal di atas
                            </label>

                            <input
                                type="number"
                                // id="default-search"
                                className="input input-bordered w-full max-w-xs bg-grey text-midnight"
                                placeholder={jadwal.rute_id}
                                // required
                                onChange={(e) =>
                                    setData("rute_id", e.target.value)
                                }
                                value={data.rute_id}
                            />
                            <p className="text-red text-sm mt-2">
                                {errors.rute_id}
                            </p>
                        </div>
                        <div>
                            <label
                                htmlFor="jenis_penumpang"
                                className="block text-sm font-medium text-gray"
                            >
                                Sesuaikan berdasarkan ID Jadwal di atas
                            </label>

                            <input
                                type="number"
                                // id="default-search"
                                className="input input-bordered w-full max-w-xs bg-grey text-midnight"
                                placeholder={jadwal.kapal_id}
                                // required
                                onChange={(e) =>
                                    setData("kapal_id", e.target.value)
                                }
                                value={data.kapal_id}
                            />
                            <p className="text-red text-sm mt-2">
                                {errors.kapal_id}
                            </p>
                        </div>
                        <h2 className="text-midnight font-serif">
                            Kategori Penumpang
                        </h2>
                        {data.passengers.map((passenger, index) => (
                            <div key={index}>
                                <select
                                    className="select w-full  max-w-xs bg-grey text-midnight flex items-center justify-center"
                                    value={passenger.category}
                                    onChange={(e) =>
                                        handlePassengerChange(
                                            index,
                                            "category",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="dewasa">Dewasa</option>
                                    <option value="anak">Anak</option>
                                </select>
                                {errors.passengers &&
                                    errors.passengers[index] && (
                                        <div>{errors.passengers[index]}</div>
                                    )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addPassenger}
                            className="py-2 px-2 rounded-md font-serif  text-midnight hover:bg-grey"
                        >
                            Tambah Penumpang
                        </button>

                        <h2 className="font-serif text-midnight">
                            Tipe Kendaraan
                        </h2>
                        {data.vehicles.map((vehicle, index) => (
                            <div key={index}>
                                <select
                                    className="select w-full  max-w-xs bg-grey text-midnight flex items-center justify-center"
                                    value={vehicle.type}
                                    onChange={(e) =>
                                        handleVehicleChange(
                                            index,
                                            "type",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="mobil">Mobil</option>
                                    <option value="sepeda_motor">
                                        Sepeda Motor
                                    </option>
                                    <option value="truk">Truk</option>
                                </select>
                                {errors.vehicles && errors.vehicles[index] && (
                                    <div>{errors.vehicles[index]}</div>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addVehicle}
                            className="py-2 px-2 rounded-md font-serif  text-midnight hover:bg-grey"
                        >
                            Tambah Kendaraan
                        </button>

                        <div>
                            <button
                                className="w-full px-4 py-2 font-semibold text-white bg-green rounded-md hover:bg-metal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                type="submit"
                            >
                                Checkout
                            </button>
                        </div>
                        <div>
                            <Link
                                className="w-full px-4 py-2 font-semibold text-white bg-red rounded-md hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                href="/userDashboard"
                            >
                                Kembali
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <h1 className="text-center pt-4 font-semibold text-midnight">
                Riwayat Order
            </h1>

            <div className="flex items-center justify-center py-4 px-4 container">
                {ticket.map((t) => (
                    <div className="card cart" key={t.id}>
                        <div className="">
                            <label className="title uppercase  text-gray">
                                {t.rutes.nama_rute}
                            </label>
                            <div className="steps">
                                <div className="step">
                                    <div className="font-mono">
                                        <span>Shipping</span>
                                        <p>Nama Kapal : {t.kapals.nama_kapal}</p>
                                        <p className=" text-gray">Kode Tiket : {t.code}</p>
                                        <p className=" text-gray">
                                            Tanggal : {t.jadwals.tanggal}
                                        </p>
                                        <p className=" text-gray">
                                            Estimasi Tiba : {t.jadwals.tiba}
                                        </p>
                                        <p className=" text-gray">
                                            Keberangkatan : {t.jadwals.keberangkatan}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="payments">
                                <span className="text-midnight font-bold ml-40">PAYMENT</span>
                                <div className="details mx-10">
                                    <ul>
                                        {t.passengers.map((p) => (
                                            <li
                                                key={p.id}
                                                className=" text-gray"
                                            >
                                                Penumpang : {p.category}
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
                                                Jenis Kendaraan : {p.type}
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
        </UserLayout>
    );
};

export default FormOrder;
