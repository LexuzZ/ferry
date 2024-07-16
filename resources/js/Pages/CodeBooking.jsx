import React, { useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";

export default function CekBooking(props) {
    const { ticket } = usePage().props;

    return (
        <div className=" min-h-screen  text-black text-2xl bg-grey">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="grid grid-cols-1 gap-4 pb-4 mx-2 pt-5">
                <div className="bg-white p-4 mt-1  mx-4 space-y-3 rounded-lg shadow">
                    <div className="text-center text-2xl font-bold text-midnight">
                        Detail Tiket
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-bold">
                        <div className="text-midnight ">
                            {ticket.rutes.nama_rute}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-bold">
                        <div className="text-midnight ">
                            {ticket.kapals.nama_kapal}
                        </div>
                    </div>
                    <div className="flex text-midnight font-medium text-sm">
                        <div className="w-1/2 ">Kode Tiket :</div>
                        <div className="w-1/2">{ticket.code}</div>
                    </div>
                    <div className="flex text-midnight font-medium text-sm">
                        <div className="w-1/2 ">Tanggal Keberangkatan :</div>
                        <div className="w-1/2">
                            {new Date(
                                ticket.jadwals.tanggal
                            ).toLocaleDateString()}
                        </div>
                    </div>
                    <div className="flex text-midnight font-medium text-sm">
                        <div className="w-1/2 ">Jadwal Kapal Sandar :</div>
                        <div className="w-1/2">{ticket.jadwals.tiba}</div>
                    </div>
                    <div className="flex text-midnight font-medium text-sm">
                        <div className="w-1/2 ">Jadwal Keberangkatan :</div>
                        <div className="w-1/2">
                            {ticket.jadwals.keberangkatan}
                        </div>
                    </div>
                    <div className="flex text-midnight font-medium text-sm">
                        <div className="w-1/2 ">Nama Penumpang :</div>
                        <div className="w-1/2">{ticket.nama}</div>
                    </div>
                    <div className="flex text-midnight font-medium text-sm">
                        <div className="w-1/2 ">KTP Penumpang :</div>
                        <div className="w-1/2">{ticket.ktp}</div>
                    </div>
                    <div className="flex text-midnight font-medium text-sm">
                        <Link
                            href="/"
                            className="btn bg-red btn-sm  text-white"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
