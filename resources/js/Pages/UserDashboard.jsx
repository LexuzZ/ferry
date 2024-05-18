import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import hero from "../../../public/hero.jpg";
export default function userDashboard() {
    const [routeDetail, setRouteDetail] = useState("");
    const { auth, rutes, rute } = usePage().props;
    console.log(rute);
    return (
        <UserLayout>
            <div className="pt-10  min-h-screen">
                <section>
                    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                    Easiest way to create your website
                                </h1>
                                <div className="mt-8 space-y-5 dark:text-midnight">
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-midnight">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 mx-2 text-blue-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="mx-2">
                                            Clean and Simple Layout
                                        </span>
                                    </p>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 mx-2 text-blue-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="mx-2">
                                            Just Copy Paste Codeing
                                        </span>
                                    </p>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 mx-2 text-blue-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="mx-2">
                                            Easy to Use
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full mt-8  rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                                <Link
                                    href="/userJadwal"
                                    className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                                >
                                    Pesan Tiket Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img
                                className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                                src={hero}
                            />
                        </div>
                    </div>
                </section>
                {/* <h1>Rute: {rute.id}</h1>
                <h2>Jadwals:</h2>
                <ul>
                    {rute.jadwals.map((jadwal) => (
                        <li key={jadwal.id}>{jadwal.tanggal}</li>
                    ))}
                </ul> */}
            </div>
        </UserLayout>
    );
}
