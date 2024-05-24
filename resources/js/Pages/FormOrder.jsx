import UserLayout from "@/Layouts/UserLayout";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../css/card.css";

const FormOrder = () => {
    const { jadwal, ticket, user, flash, rute } = usePage().props;
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
    const totalPassengerPrice = data.passengers.reduce(
        (acc, passenger) => acc + passenger.price,
        0
    );
    const totalVehiclePrice = data.vehicles.reduce(
        (sum, vehicle) => sum + vehicle.price,
        0
    );
    const totalPrice = totalPassengerPrice + totalVehiclePrice;

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
                    <form className="space-y-4" onSubmit={handleSubmit}>
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
                                Jadwal Keberangkatan :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.tanggal}
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

                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                Estimasi Tiba :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.tiba}
                                </h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                Estimasi Keberangkatan :{" "}
                                <h1 className="badge badge-neutral">
                                    {" "}
                                    {jadwal.keberangkatan}
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
                              className="input input-bordered w-full max-w-xs bg-grey text-midnight"  placeholder={jadwal.id}
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
                              className="input input-bordered w-full max-w-xs bg-grey text-midnight"  placeholder={jadwal.rute_id}
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
                              className="input input-bordered w-full max-w-xs bg-grey text-midnight"  placeholder={jadwal.kapal_id}
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

            <div className="flex items-center justify-center py-4 px-4 ">
                {ticket.map((t) => (
                    <div className="card mx-5" key={t.id}>
                        <div className="card-info">
                            <p className="text-title text-gray">{user.name}</p>
                            <p className="text-body text-gray">{t.code}</p>
                            <p className="text-body text-gray">{t.kendaraan}</p>
                            <p className="text-body text-gray">
                                {jadwal.tanggal}
                            </p>
                            <p className="text-body text-gray">{jadwal.tiba}</p>
                            <p className="text-body text-gray">
                                {jadwal.keberangkatan}
                            </p>
                            {t.passengers.map((p) => (
                                <p key={p.id} className="text-body text-gray">
                                    {p.category}
                                </p>
                            ))}
                            {t.vehicles.map((v) => (
                                <p key={v.id} className="text-body text-gray">
                                    {v.type}
                                </p>
                            ))}
                        </div>

                        <div className="card-footer">
                            

                            <Link
                                className="card-button"
                                href={`/payment/${t.id}`}
                            >
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z" />
                                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z" />
                                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray rounded-lg shadow-lg">
                <h1>Pemesanan Tiket</h1>
                <form onSubmit={handleButon}>
                    <div>
                        <label
                            htmlFor="jenis_penumpang"
                            className="block text-sm font-medium text-gray"
                        >
                            Masukkan ID Jadwal dibawah
                        </label>

                        <input
                            type="number"
                            // id="default-search"
                            className=" border  border-gray-300 text-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                            placeholder="enter ..."
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
                    {passengers.map((passenger, index) => (
                        <div key={index}>
                            <select
                                value={passenger.category}
                                onChange={(e) => {
                                    const newPassengers = [...passengers];
                                    newPassengers[index].category =
                                        e.target.value;
                                    setPassengers(newPassengers);
                                }}
                            >
                                <option value="dewasa">Dewasa</option>
                                <option value="anak">Anak</option>
                            </select>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() =>
                            setPassengers([
                                ...passengers,
                                { name: "", category: "dewasa" },
                            ])
                        }
                    >
                        Tambah Penumpang
                    </button>

                    {vehicles.map((vehicle, index) => (
                        <div key={index}>
                            <select
                                value={vehicle.type}
                                onChange={(e) => {
                                    const newVehicles = [...vehicles];
                                    newVehicles[index].type = e.target.value;
                                    setVehicles(newVehicles);
                                }}
                            >
                                <option value="truk">Truk</option>
                                <option value="mobil">Mobil</option>
                                <option value="sepeda_motor">
                                    Sepeda Motor
                                </option>
                            </select>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() =>
                            setVehicles([...vehicles, { type: "sedan" }])
                        }
                    >
                        Tambah Kendaraan
                    </button>

                    <button
                        type="submit"
                        className="flex items-center justify-end"
                    >
                        Pesan
                    </button>
                </form>
            </div> */}
        </UserLayout>
    );
};

export default FormOrder;
