import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import "../../../css/trash.css";
import "../../../css/action.css";

const Edit = ({ kapal }) => {
    const { flash, errors } = usePage().props;
    const [processing, setProcessing] = useState(false);
    const { data, setData } = useForm({
        nama_kapal: kapal.nama_kapal,
    });
    const handleUpdate = (e) => {
        setProcessing(true);
        e.preventDefault();
        router.post(`/kapal/edit/${kapal.id}`, {
            _method: "patch",

            nama_kapal: data.nama_kapal,
        });
    };

    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4">
                Update Jadwal jadwal_id {data.nama_kapal}
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
                                    tujuan
                                </label>
                                <input
                                    type="text"
                                    // id="default-search"
                                    className="bg-sea border border-gray-300 text-midnight text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("nama_kapal", e.target.value)
                                    }
                                    value={data.nama_kapal}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.nama_kapal}
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
