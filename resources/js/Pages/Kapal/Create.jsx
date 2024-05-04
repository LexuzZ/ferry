import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../../css/action.css";
import "../../../css/trash.css";

const Create = () => {
    const { flash, errors, kapal } = usePage().props;

    const {
        data,
        setData,
        reset,
        post: submit,
    } = useForm({
        jadwal_id: "",
        nama_kapal: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(route("kapals.store"));
    };
    const deletePost = async (id) => {
        router.delete(`/kapal/${id}`);
    };
    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4">
                Tambah Data Kapal
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
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-midnight"
                            >
                                Jadwal ID
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setData("jadwal_id", e.target.value)
                                }
                                value={data.jadwal_id}
                            >
                                <option value="" disabled selected>
                                    Pilih Rute Asal
                                </option>
                                {kapal.map((k) => (
                                    <option key={k.id} value={k.id}>
                                        {k.jadwal_id}
                                    </option>
                                ))}
                            </select>

                            <p className="text-red text-sm mt-2">
                                {errors.jadwal_id}
                            </p>
                        </div>

                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-midnight"
                            >
                                Jadwal ID
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setData("jadwal_id", e.target.value)
                                }
                                value={data.nama_kapal}
                            >
                                <option value="" disabled selected>
                                    Pilih Rute Asal
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

                        <button
                            type="submit"
                            className="mt-4 text-bermuda bg-navy hover:bg-blue hover:text-bermuda focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};
export default Create;
