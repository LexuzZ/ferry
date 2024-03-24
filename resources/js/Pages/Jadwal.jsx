import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../../resources/css/action.css";

const Jadwal = ({ jadwals }) => {
    const { flash, errors } = usePage().props;

    const { data, setData, reset } = useForm({
        tanggal: "",
        tiba: "",
        keberangkatan: "",
    });
    const storeInfo = (e) => {
        e.preventDefault();
        router.post("/jadwal", data, {
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4">
                Informasi Jadwal
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
                    <form className="max-w-md mx-auto" onSubmit={storeInfo}>
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

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-center rtl:text-right text-midnight">
                    <thead className="text-xs text-midnight uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                tiba
                            </th>
                            <th scope="col" className="px-6 py-3">
                                keberangkatan
                            </th>

                            <th scope="col" className=" py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jadwals.data.map((jadwal, i) => {
                            return (
                                <tr key={i}>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {jadwal.tanggal}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {jadwal.tiba}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {jadwal.keberangkatan}
                                    </th>

                                    <td className=" flex justify-center ">
                                        <Link class="bin-button">
                                            <svg
                                                class="bin-top"
                                                viewBox="0 0 39 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line
                                                    y1="5"
                                                    x2="39"
                                                    y2="5"
                                                    stroke="white"
                                                    stroke-width="4"
                                                ></line>
                                                <line
                                                    x1="12"
                                                    y1="1.5"
                                                    x2="26.0357"
                                                    y2="1.5"
                                                    stroke="white"
                                                    stroke-width="3"
                                                ></line>
                                            </svg>
                                            <svg
                                                class="bin-bottom"
                                                viewBox="0 0 33 39"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask
                                                    id="path-1-inside-1_8_19"
                                                    fill="white"
                                                >
                                                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                                                </mask>
                                                <path
                                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                                    fill="white"
                                                    mask="url(#path-1-inside-1_8_19)"
                                                ></path>
                                                <path
                                                    d="M12 6L12 29"
                                                    stroke="white"
                                                    stroke-width="4"
                                                ></path>
                                                <path
                                                    d="M21 6V29"
                                                    stroke="white"
                                                    stroke-width="4"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div>
        </AdminLayout>
    );
};
export default Jadwal;
