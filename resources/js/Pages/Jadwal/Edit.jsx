import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import "../../../css/trash.css";
import "../../../css/action.css";

const Edit = ({ jadwal, rute, kapal }) => {
    console.log(rute);
    console.log(kapal);
    const { flash, errors } = usePage().props;
    const [processing, setProcessing] = useState(false);
    const { data, setData } = useForm({
        asal: jadwal.asal,
        nama_kapal: jadwal.nama_kapal,
        tiba: jadwal.tiba,
        tanggal: jadwal.tanggal,
        tiba: jadwal.tiba,
        keberangkatan: jadwal.keberangkatan,
    });
    const handleUpdate = (e) => {
        setProcessing(true);
        e.preventDefault();
        router.post(`/jadwals/edit/${jadwal.id}`, {
            _method: "patch",
            asal: data.asal,
            tiba: data.tiba,
            nama_kapal: data.nama_kapal,
            tanggal: data.tanggal,
            tiba: data.tiba,
            keberangkatan: data.keberangkatan,
        });
    };

    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4">
                Update Jadwal Tanggal {data.tanggal}
            </div>
            {flash.message && (
                <div
                    className="flex items-center p-4 mb-4 text-sm text-midnight rounded-lg  dark:text-green"
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
            <div className="flex items-center justify-center">
                <div className="w-full max-w-sm p-4 bg-bermuda border border-gray rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray dark:border-gray">
                    <form className="max-w-md mx-auto" onSubmit={handleUpdate}>
                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-midnight"
                            >
                                Nama Kapal
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setData("nama_kapal", e.target.value)
                                }
                                value={data.nama_kapal}
                            >
                                <option value="" disabled selected>
                                    Pilih Kapal
                                </option>
                                {kapal.map((k) => (
                                    <option key={k.id} value={k.id}>
                                        {k.nama_kapal}
                                    </option>
                                ))}
                            </select>

                            <p className="text-red text-sm mt-2">
                                {errors.nama_kapal}
                            </p>
                        </div>
                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-midnight"
                            >
                                Pelabuhan Asal
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setData("asal", e.target.value)
                                }
                                value={data.asal}
                            >
                                <option value="" disabled selected>
                                    Pilih Rute Asal
                                </option>
                                {rute.map((k) => (
                                    <option key={k.id} value={k.id}>
                                        {k.asal}
                                    </option>
                                ))}
                            </select>

                            <p className="text-red text-sm mt-2">
                                {errors.asal}
                            </p>
                        </div>
                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-midnight"
                            >
                                Pelabuhan Tujuan
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setData("tujuan", e.target.value)
                                }
                                value={data.tujuan}
                            >
                                <option value="" disabled selected>
                                    Pilih Rute Tujuan
                                </option>
                                {rute.map((k) => (
                                    <option key={k.id} value={k.id}>
                                        {k.tujuan}
                                    </option>
                                ))}
                            </select>

                            <p className="text-red text-sm mt-2">
                                {errors.tujuan}
                            </p>
                        </div>
                        <div>
                            <label
                                for="default-search"
                                className="mb-2 text-sm font-medium text-gray sr-only dark:text-bermuda"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-bermuda"
                                >
                                    Tanggal Keberangkatan
                                </label>
                                <input
                                    type="date"
                                    // id="default-search"
                                    className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("tanggal", e.target.value)
                                    }
                                    value={data.tanggal}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.tanggal}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label
                                for="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-bermuda"
                                >
                                    Tiba
                                </label>
                                <input
                                    type="time"
                                    // id="default-search"
                                    className="bg-sea border border-gray-300 text-midnight text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("tiba", e.target.value)
                                    }
                                    value={data.tiba}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.tiba}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label
                                for="default-search"
                                className="mb-2 text-sm font-medium text-midnight sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-bermuda"
                                >
                                    Keberangkatan
                                </label>
                                <input
                                    type="time"
                                    // id="default-search"
                                    className="bg-sea border border-gray-300 text-midnight text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("keberangkatan", e.target.value)
                                    }
                                    value={data.keberangkatan}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.keberangkatan}
                                </p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 text-bermuda bg-navy hover:bg-blue hover:text-bermuda focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {processing ? "Processing..." : "UPDATE"}
                        </button>
                    </form>
                    {/* {errors.nama_kapal && (
                    <p className="text-red-800 text-sm mt-2">
                        {errors.nama_kapal}
                    </p>
                )} */}
                </div>
            </div>

            {/* <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div> */}
        </AdminLayout>
    );
};
export default Edit;
