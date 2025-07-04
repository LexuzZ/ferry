import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import "../../../css/trash.css";
import "../../../css/action.css";

const Edit = ({ jadwal, rute, kapal }) => {
    
    const { flash, errors } = usePage().props;
    const [processing, setProcessing] = useState(false);
    const { data, setData } = useForm({
        rute_id: jadwal.rute_id,
        kapal_id: jadwal.kapal_id,
        tanggal: jadwal.tanggal,
        tiba: jadwal.tiba,
        keberangkatan: jadwal.keberangkatan,
    });
    const handleUpdate = (e) => {
        setProcessing(true);
        e.preventDefault();
        router.post(`/jadwals/edit/${jadwal.id}`, {
            _method: "patch",
            rute_id: data.rute_id,
            kapal_id: data.kapal_id,
            tanggal: data.tanggal,
            tiba: data.tiba,
            keberangkatan: data.keberangkatan,
        });
    };

    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-serif py-2">
                Update Jadwal {new Date(data.tanggal).toLocaleDateString()}
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
                <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow sm:p-6 md:p-8  ">
                    <form className="max-w-md mx-auto" onSubmit={handleUpdate}>
                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-midnight"
                            >
                                Nama Kapal
                            </label>
                            <select
                                className="select w-full bg-grey text-midnight"
                                onChange={(e) =>
                                    setData("kapal_id", e.target.value)
                                }
                                value={data.kapal_id}
                            >
                                <option value="" disabled selected>
                                    Pilih Kapal
                                </option>
                                {kapal.map((kapal) => (
                                    <option key={kapal.id} value={kapal.id}>
                                        {kapal.nama_kapal}
                                    </option>
                                ))}
                            </select>

                            <p className="text-red text-sm mt-2">
                                {errors.kapal_id}
                            </p>
                        </div>
                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-midnight"
                            >
                                Nama Rute
                            </label>
                            <select
                                className="select w-full bg-grey text-midnight"
                                onChange={(e) =>
                                    setData("rute_id", e.target.value)
                                }
                                value={data.rute_id}
                            >
                                <option value="" disabled selected>
                                    Pilih Rute
                                </option>
                                {rute.map((rute) => (
                                    <option key={rute.id} value={rute.id}>
                                        {rute.nama_rute}
                                    </option>
                                ))}
                            </select>

                            <p className="text-red text-sm mt-2">
                                {errors.rute_id}
                            </p>
                        </div>

                        <div>
                            <label
                                for="default-search"
                                className="mb-2 text-sm font-medium sr-only text-midnight"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-midnight"
                                >
                                    Tanggal Keberangkatan
                                </label>
                                <input
                                    type="date"
                                    // id="default-search"
                                    className="bg-grey border text-midnight border-gray  text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 "
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
                                className="mb-2 text-sm font-medium text-gray-900 sr-only "
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-midnight"
                                >
                                    Tiba
                                </label>
                                <input
                                    type="time"
                                    // id="default-search"
                                    className="bg-grey border text-midnight border-gray  text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 "
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
                                className="mb-2 text-sm font-medium text-midnight sr-only "
                            >
                                Search
                            </label>
                            <div className="relative">
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-midnight"
                                >
                                    Keberangkatan
                                </label>
                                <input
                                    type="time"
                                    id="default-search"
                                    className="bg-grey border text-midnight   text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 "
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
                            className="mt-4 text-white bg-green hover:bg-blue hover:text-grey focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {processing ? "Processing..." : "UPDATE"}
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};
export default Edit;
