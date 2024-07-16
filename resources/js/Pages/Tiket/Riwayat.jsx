import UserLayout from "@/Layouts/UserLayout";
import { Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import CetakTiket from "./CetakTiket";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PaymentBadge from "@/Components/status";
import { PiPrinter } from "react-icons/pi";

const Riwayat = () => {
    const { ticket, transaksi } = usePage().props;
    console.log(transaksi);

    return (
        <UserLayout>
            <div className="min-h-screen">
                <div className="pt-24 text-center text-2xl text-midnight font-serif mb-5">
                    <h1>Riwayat Transaksi</h1>
                </div>

                <div className="overflow-x-auto rounded-lg  shadow mx-4 hidden md:block">
                    <table className="w-full">
                        {/* head */}
                        <thead className="bg-navy border-b-2 border-midnight">
                            <tr className="text-white font-serif">
                                <th className="p-3 text-sm font-semibold tracking-wide">
                                    Kode Tiket
                                </th>
                                <th className="p-3 text-sm font-semibold tracking-wide">
                                    Status
                                </th>
                                <th className="p-3 text-sm font-semibold tracking-wide">
                                    Total
                                </th>
                                <th className="p-3 text-sm font-semibold tracking-wide">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaksi.map((t) => (
                                <tr
                                    key={t.id}
                                    className="text-center  bg-white"
                                >
                                    <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                        {t.tickets.code}
                                    </td>

                                    <td>
                                        <PaymentBadge status={t.status} />
                                    </td>
                                    <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                        {new Intl.NumberFormat("id", {
                                            style: "currency",
                                            currency: "IDR",
                                            maximumFractionDigits: 0,
                                        }).format(t.amount)}
                                    </td>

                                    <td>
                                        <Link
                                            href={`/riwayat/${t.tickets.id}/pdf`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-ghost bg-white text-gray hover:underline text-sm"
                                        >
                                            Print <PiPrinter size={20} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {transaksi.map((t) => (
                    <div className="grid grid-cols-1 gap-4 pb-4 md:hidden">
                        <div className="bg-white p-4 mt-1  mx-4 space-y-3 rounded-lg shadow">
                            <div className="flex items-center space-x-2 text-sm">
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray font-bold hover:underline"
                                    >
                                        #{t.id}
                                    </a>
                                </div>
                                <div className="text-midnight ">
                                    {t.tickets.code}
                                </div>
                                <PaymentBadge status={t.status} />
                            </div>
                            <div className="text-midnight font-medium text-sm">
                                {new Intl.NumberFormat("id", {
                                    style: "currency",
                                    currency: "IDR",
                                    maximumFractionDigits: 0,
                                }).format(t.amount)}
                            </div>
                            <div className="text-midnight font-medium text-sm">
                                <Link
                                    href={`/riwayat/${t.tickets.id}/pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost  hover:underline text-gray"
                                >
                                    Print <PiPrinter size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </UserLayout>
    );
};

export default Riwayat;
