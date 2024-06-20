import UserLayout from "@/Layouts/UserLayout";
import { Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import CetakTiket from "./CetakTiket";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Riwayat = () => {
    const { ticket, transaksi } = usePage().props;
    console.log(transaksi);

    return (
        <UserLayout>
            <div className="min-h-screen">
                <div className="pt-24 text-center text-2xl text-midnight font-serif">
                    <h1>Riwayat Transaksi</h1>
                </div>

                <div className="overflow-x-auto text-gray text-center px-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center text-midnight font-serif">
                                <th>Kode Tiket</th>
                                <th>Status Pembayaran</th>
                                <th>Total</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {transaksi.map((t) => (
                                <tr key={t.id} className="text-center">
                                    <td>{t.tickets.code}</td>
                                    <td>{t.status}</td>
                                    <td>{t.amount}</td>

                                    {/* <td>{t.transactions.status}</td> */}
                                    <td>
                                        <Link
                                            href={`/riwayat/${t.id}/pdf`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-link "
                                        >
                                            View PDF
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <div className="pt-24 text-center text-2xl text-midnight font-serif">
                        <h1>Riwayat Rute</h1>
                    </div>
                    <div className="overflow-x-auto text-gray text-center px-4">
                        <table className="table">
                            <thead>
                                <tr className="text-center text-midnight font-serif">
                                    <th>Kode Tiket</th>
                                    <th>Rute Penyebrangan</th>
                                    <th>Nama Kapal</th>
                                    <th>Tanggal Keberangkatan</th>
                                    <th>Estimasi Tiba</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        </UserLayout>
    );
};

export default Riwayat;
