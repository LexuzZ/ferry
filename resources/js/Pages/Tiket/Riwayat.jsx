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
                                <th>Rute Penyebrangan</th>
                                <th>Nama Kapal</th>
                                <th>Tanggal Keberangkatan</th>
                                <th>Estimasi Tiba</th>
                                <th>Estimasi Keberangkatan</th>
                                <th>Kategori Penumpang</th>
                                <th>Tipe Kendaraan</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {ticket.map((t) => (
                                <tr key={t.id} className="text-center">
                                    <td>{t.code}</td>
                                    <td>{t.rutes.nama_rute}</td>
                                    <td>{t.kapals.nama_kapal}</td>
                                    <td>{t.jadwals.tanggal}</td>
                                    <td>{t.jadwals.tiba}</td>
                                    <td>{t.jadwals.keberangkatan}</td>
                                    <ul>
                                        {t.passengers.map((p) => (
                                            <li
                                                key={p.id}
                                                className="text-body text-gray"
                                            >
                                                {p.category}
                                            </li>
                                        ))}
                                    </ul>

                                    {t.vehicles.map((p) => (
                                        <td
                                            key={p.id}
                                            className="text-body text-gray"
                                        >
                                            {p.type}
                                        </td>
                                    ))}
                                    
                                    <Link
                                        href={`/riwayat/${t.id}/pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-link mt-3"
                                    >
                                        View PDF
                                    </Link>
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
