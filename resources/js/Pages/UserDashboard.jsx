import UserLayout from "@/Layouts/UserLayout";
import { Head, createInertiaApp } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import hero from "../../../public/hero.jpg";
export default function userDashboard() {
    const { auth, rutes, rute } = usePage().props;
    console.log(rutes);
    return (
        <UserLayout>
            <div className="pt-10  min-h-screen px-4">
                <h2 className=" pt-10 px-5 text-2xl font-serif text-midnight mb-6">
                    Selamat Datang {auth.user.name}!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Card 1</h3>
                        <p className="mt-2 text-gray-600">
                            This is the first card.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Card 2</h3>
                        <p className="mt-2 text-gray-600">
                            This is the second card.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Card 3</h3>
                        <p className="mt-2 text-gray-600">
                            This is the third card.
                        </p>
                    </div>
                </div>

                <div className=" overflow-x-auto shadow-md sm:rounded-lg pt-10 pb-4 px-10">
                    <h1 className="text-2xl text-midnight pb-2">Cari Tiket Sekarang</h1>
                    <table className="table-auto border-collapse w-full">
                        <thead className="text-xs text-midnight text-center uppercase bg-metal font-bold">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Rute
                                </th>

                                <th scope="col" className=" py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-center">
                            {rutes.map((rute) => (
                                <tr key={rute.id}>
                                    <td
                                        scope="row"
                                        className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {rute.nama_rute}
                                    </td>

                                    <td>
                                        <Link
                                            className="btn  btn-outline font-normal text-midnight"
                                            href={`/userJadwal/${rute.id}/detail`}
                                        >
                                            Detail Keberangkatan
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </UserLayout>
    );
}
