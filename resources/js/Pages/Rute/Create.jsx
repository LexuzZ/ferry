import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../../css/action.css";
import "../../../css/trash.css";

const Create = () => {
    const { flash, errors } = usePage().props;

    const { data, setData, reset, post: submit } = useForm({
        jadwal_id: "",
        asal: "",
        tujuan: "",
    });
   
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(route('rutes.store'));
    };
    const deletePost = async (id) => {
        router.delete(`/rute/${id}`);
    };
    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4 mt-5">
                Tambah Rute Perjalanan 
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
            <div className="flex items-center justify-center mt-5">
                <div className="w-full max-w-sm p-4 bg-bermuda border border-gray rounded-lg shadow sm:p-6 md:p-8 dark:bg-white dark:border-gray">
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
                                    Jadwal ID
                                </label>
                                <input
                                    type="text"
                                    // id="default-search"
                                    className="bg-silver border text-midnight border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                                    Asal Pelabuhan
                                </label>
                                <input
                                    type="text"
                                    // id="default-search"
                                    className="bg-silver border text-midnight border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("asal", e.target.value)
                                    }
                                    value={data.asal}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.asal}
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
                                    Pelabuhan Tujuan
                                </label>
                                <input
                                    type="text"
                                    // id="default-search"
                                    className="bg-silver border border-gray-300 text-midnight text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("tujuan", e.target.value)
                                    }
                                    value={data.tujuan}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.tujuan}
                                </p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 text-white bg-metal hover:bg-blue hover:text-bermuda focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save
                        </button>
                    </form>
                    {/* {errors.nama_kapal && (
                    <p className="text-red-800 text-sm mt-2">
                        {errors.nama_kapal}
                    </p>
                )} */}
                </div>
            </div>

            
        </AdminLayout>
        // <div>
            
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             value={data.asal}
        //             onChange={(e) => setData('asal', e.target.value)}
        //         />
        //         <input
        //             type="text"
        //             value={data.tujuan}
        //             onChange={(e) => setData('tujuan', e.target.value)}
        //         />
        //         <button type="submit">Tambah Rute</button>
        //     </form>
        //     <table className="w-full text-sm text-center rtl:text-right text-midnight">
        //         {rutes.map((rute) => (
        //             <li key={rute.id}>{rute.asal}</li>
                   
        //         ))}
        //         {rutes.map((rute) => (
        //             <li key={rute.id}>{rute.tujuan}</li>
                   
        //         ))}
        //     </table>
        // </div>
    );
};
export default Create;
