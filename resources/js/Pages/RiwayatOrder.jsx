import UserLayout from "@/Layouts/UserLayout";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import "../../css/orders.css";
import { Inertia } from "@inertiajs/inertia";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
const RiwayatOrder = () => {
    const { ticket, flash } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ticket.store"));
    };

    return (
        <UserLayout>
            {flash.message && (
                <div
                    className="flex items-center pt-24 text-center text-sm text-midnight rounded-lg  dark:text-green"
                    role="alert"
                >
                    <svg
                        className="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org0/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-normal">Success alert!</span>{" "}
                        {flash.message}
                    </div>
                </div>
            )}

            <h1 className="text-center pt-24 text-2xl mb-4  font-serif  text-midnight">
                Riwayat Order
            </h1>

            <div className="overflow-x-auto rounded-lg mx-4 shadow  hidden md:block">
                <table className="w-full">
                    {/* head */}
                    <thead className="bg-white border-b-2 ">
                        <tr className="text-midnight font-serif">
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Kode Tiket
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Rute
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Kapal
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Tanggal{" "}
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Tiba
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Keberangkatan
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Kendaraan
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Penumpang
                            </th>
                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Total
                            </th>

                            <th className="p-3 text-sm font font-semibold tracking-wide font-serif">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticket.map((t) => (
                            <tr key={t.id} className="text-center bg-white">
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {t.code}
                                </td>
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {t.rutes.nama_rute}
                                </td>
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {t.kapals.nama_kapal}
                                </td>
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {new Date(
                                        t.jadwals.tanggal
                                    ).toLocaleDateString()}
                                </td>
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {t.jadwals.tiba}
                                </td>
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {t.jadwals.keberangkatan}
                                </td>
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {t.totalKendaraan}
                                </td>
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {t.totalPenumpang}
                                </td>
                                {/* <td>{t.status}</td> */}
                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    {new Intl.NumberFormat("id", {
                                        style: "currency",
                                        currency: "IDR",
                                        maximumFractionDigits: 0,
                                    }).format(t.totalPrice)}
                                </td>

                                <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                    <Link
                                        className="btn btn-link text-midnight hover:underline"
                                        href={`/payment/${t.id}`}
                                    >
                                        <PiShoppingCartSimpleDuotone
                                            size={20}
                                        />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {ticket.map((t) => (
                <div className="grid grid-cols-1 gap-4 pb-4 md:hidden mx-2">
                    <div className="bg-white p-4 space-y-3 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a
                                    href="#"
                                    className="hover:underline text-gray"
                                >
                                    #{t.id}
                                </a>
                            </div>
                            <div className="text-midnight font-bold">
                                {t.code}
                            </div>
                            <div className="text-white badge badge-success font-bold">
                                {t.nama}
                            </div>
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">Rute </div>
                            <div className="w-1/2">{t.rutes.nama_rute}</div>
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">Armada </div>
                            <div className="w-1/2">{t.kapals.nama_kapal}</div>
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">Tanggal </div>
                            <div className="w-1/2">
                                {new Date(
                                    t.jadwals.tanggal
                                ).toLocaleDateString()}
                            </div>
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">
                                Estimasi Waktu Kedatangan{" "}
                            </div>
                            <div className="w-1/2">{t.jadwals.tiba}</div>
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">
                                Estimasi Waktu Keberangkatan{" "}
                            </div>
                            <div className="w-1/2">
                                {t.jadwals.keberangkatan}
                            </div>
                        </div>
                        <div className="text-midnight font-bold text-normal">
                            Total Penumpang
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">Anak </div>
                            <div className="w-1/2">{t.totalAnak}</div>
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">Dewasa </div>
                            <div className="w-1/2">{t.totalDewasa}</div>
                        </div>
                        <div className="text-midnight font-bold text-normal">
                            Kendaraan
                        </div>
                        <div className="flex text-midnight font-normal text-sm">
                            <div className="w-1/2 ">
                                Tipe Kendaraan
                            </div>
                            {t.vehicles.map((v) => (
                                <div className="w-1/2">{v.type}</div>
                            ))}
                        </div>
                        <div className="flex text-midnight font-normal text-normal">
                            <div className="w-1/2 ">Total</div>
                            <div className="w-1/2 ">
                                {" "}
                                {new Intl.NumberFormat("id", {
                                    style: "currency",
                                    currency: "IDR",
                                    maximumFractionDigits: 0,
                                }).format(t.totalPrice)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </UserLayout>
    );
};

export default RiwayatOrder;
