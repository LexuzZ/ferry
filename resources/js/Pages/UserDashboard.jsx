import UserLayout from "@/Layouts/UserLayout";
import { Head, createInertiaApp } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import hero from "../../../public/hero.jpg";
export default function userDashboard() {
    const { auth, rutes, jadwal } = usePage().props;
    console.log(rutes);
    return (
        <UserLayout>
            <div className="pt-10  min-h-screen px-4">
                <h2 className=" pt-10 px-5 text-2xl font-serif text-midnight mb-3">
                    Selamat Datang {auth.user.name}!
                </h2>

                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-4">
                        <h2 className="text-base font-bold text-midnight flex items-center justify-start">
                            Cari Tiket Sekarang
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jadwal.map((j) => (
                            <div
                                key={j.id}
                                className="w-full bg-white rounded-lg sahdow-lg p-3 flex flex-col justify-start"
                            >
                                <div className="mb-2 text-xl text-midnight">
                                    <h3>Rute : {j.rutes.nama_rute}</h3>
                                    <p className="mb-8 text-base text-gray-400 font-normal">
                                        {j.kapals.nama_kapal}
                                    </p>
                                </div>
                                <div className="text-left">
                                    <p className=" text-gray font-bold mb-2">
                                        {new Date(j.tanggal).toLocaleDateString()}
                                    </p>
                                    <p className=" text-gray font-bold mb-2">
                                        ETD : {j.tiba}
                                    </p>
                                    <p className=" text-gray font-bold mb-2">
                                        ETA : {j.keberangkatan}
                                    </p>
                                    
                                    <Link
                                        href={`/order/${j.id}`}
                                        className="btn btn-link flex items-center justify-end"
                                    >
                                        Pesan Tiket
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

               
            </div>
        </UserLayout>
    );
}
