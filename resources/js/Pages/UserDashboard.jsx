import UserLayout from "@/Layouts/UserLayout";
import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@/Components/Pagination";
import { FaShip } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

export default function userDashboard() {
    const { auth, jadwal, filters, rutes, kapals, total } = usePage().props;
    const [searchRute, setSearchRute] = useState(filters.search_rute || "");
    const [searchKapal, setSearchKapal] = useState(filters.search_kapal || "");
    const [searchTanggal, setSearchTanggal] = useState(
        filters.search_tanggal || ""
    );

    const search = () => {
        Inertia.get(
            "/userDashboard",
            {
                search_rute: searchRute,
                search_kapal: searchKapal,
                search_tanggal: searchTanggal,
            },
            { preserveState: true }
        );
    };
    return (
        <UserLayout>
            <div className="pt-20  min-h-screen px-4">
                <section className="max-w-6xl mx-auto  sm:px-6 lg:px-4 ">
                    <div className="text-center pb-4">
                        <h2 className="text-base font-bold mb-1 ml-10 text-midnight flex items-center justify-start">
                            Cari Tiket Sekarang
                        </h2>
                        <form
                            onSubmit={search}
                            className="container mx-auto flex justify-center items-center  md:p-0"
                        >
                            <div className="border border-white p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border border-white p-2 rounded">
                                        <div className="flex  rounded-lg bg-grey items-center p-2 ">
                                            <FaRoute
                                                size={20}
                                                className="text-midnight"
                                            />
                                            <select
                                                className=" bg-grey  select select-bordered text-midnight"
                                                value={searchRute}
                                                onChange={(e) =>
                                                    setSearchRute(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select Route
                                                </option>
                                                {rutes.map((rute) => (
                                                    <option
                                                        key={rute.id}
                                                        value={rute.nama_rute}
                                                    >
                                                        {rute.nama_rute}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex  rounded-lg bg-grey items-center p-2 ">
                                            <FaShip
                                                size={20}
                                                className="text-midnight ml-2"
                                            />
                                            <select
                                                className=" bg-grey ml-3 select select-bordered text-midnight"
                                                value={searchKapal}
                                                onChange={(e) =>
                                                    setSearchKapal(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select Ship
                                                </option>
                                                {kapals.map((kapal) => (
                                                    <option
                                                        key={kapal.id}
                                                        value={kapal.nama_kapal}
                                                    >
                                                        {kapal.nama_kapal}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 border border-white p-2 rounded">
                                        <div className="flex  rounded-lg bg-grey items-center p-2 ">
                                            <BsFillCalendarDateFill
                                                size={20}
                                                className="text-midnight ml-3"
                                            />
                                            <input
                                                type="date"
                                                value={searchTanggal}
                                                onChange={(e) =>
                                                    setSearchTanggal(
                                                        e.target.value
                                                    )
                                                }
                                                className=" bg-midnight ml-3 w-full input input-sm text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button className="p-2 border w-1/4 rounded-md bg-metal text-white">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {total === 0 ? (
                        <p className="text-center text-2xl mt-5 text-midnight">
                            Tidak ada tiket
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {jadwal.data.map((j) => (
                                <div
                                    key={j.id}
                                    className="w-full bg-white rounded-lg sahdow-lg p-3 flex flex-col justify-start"
                                >
                                    <div className="px-2 py-2 text-base text-white bg-blue">
                                        <h3>{j.nama_rute}</h3>
                                        <p className="mb-2 text-base text-gray-400 font-normal">
                                            {j.nama_kapal}
                                        </p>
                                    </div>
                                    <div className="text-left">
                                        <p className="mb-2 mt-2 text-base text-midnight font-bold">
                                            Detail Jadwal
                                        </p>
                                        <p className=" text-gray font-serif mb-2">
                                            {new Date(
                                                j.tanggal
                                            ).toLocaleDateString()}
                                        </p>
                                        <p className=" text-gray font-serif mb-2">
                                            ETD : {j.tiba}
                                        </p>
                                        <p className=" text-gray font-serif mb-2">
                                            ETA : {j.keberangkatan}
                                        </p>
                                        <div className="bg-green">
                                            <Link
                                                href={`/order/${j.id}`}
                                                className="btn btn-link flex items-center justify-end text-white hover:text-midnight"
                                            >
                                                Pesan Tiket
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                <Pagination jadwal={jadwal} />
            </div>
        </UserLayout>
    );
}
