import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../../css/trash.css";
import "../../../css/action.css";

const Jadwal = () => {
    const { flash, errors, kapal, rute } = usePage().props;
    console.log(rute);

    const { data, setData, reset } = useForm({
        tanggal: "",
        tiba: "",
        keberangkatan: "",
        nama_rute: "",
    });
    const storeInfo = (e) => {
        e.preventDefault();
        router.post("/jadwals", data, {
            onSuccess: () => {
                reset();
            },
        });
    };
    const deletePost = async (id) => {
        router.delete(`/jadwals/${id}`);
    };
    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4">
                Tambah Informasi Jadwal
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
                <div className="w-full max-w-sm p-4 bg-bermuda border border-gray rounded-lg shadow sm:p-6 md:p-8 dark:bg-grey dark:border-gray">
                    <form className="max-w-md mx-auto" onSubmit={storeInfo}>
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
                                    setData("nama_rute", e.target.value)
                                }
                                value={data.nama_rute}
                            >
                                <option value="" disabled selected>Pilih Rute Asal</option>
                                {rute.map((k) => (
                                    <option key={k.id} value={k.id}>
                                        {k.nama_rute}
                                    </option>
                                ))}
                            </select>

                            <p className="text-red text-sm mt-2">
                                {errors.asal}
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
                                    className="block mb-2 text-sm font-medium text-midnight"
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
                                    className="block mb-2 text-sm font-medium text-midnight"
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
                                    className="block mb-2 text-sm font-medium text-midnight"
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
                            Save
                        </button>
                    </form>
                </div>
            </div>

            {/* <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div> */}
        </AdminLayout>
    );
};
export default Jadwal;
