import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { usePage } from "@inertiajs/inertia-react";
import CetakTiket from "./CetakTiket";
import UserLayout from "@/Layouts/UserLayout";

const PDFPage = ({ ticket }) => {
    console.log(ticket);

    return (
        <UserLayout>
            <div className="pt-16 text-midnight">
                <h1 className="text-2xl font-bold text-center mb-6 ">
                    Detail Tiket
                </h1>
                <div className="border p-4 rounded-lg shadow-lg max-w-md mx-auto">
                    <div className="border-b pb-2 mb-2">
                        <span className="block font-bold">Armada </span>
                        <span className="block">
                            {ticket.kapals.nama_kapal}
                        </span>
                    </div>
                    <div className="border-b pb-2 mb-2">
                        <span className="block font-bold">Kode Tiket</span>
                        <span className="block">{ticket.code}</span>
                    </div>
                    <div className="border-b pb-2 mb-2">
                        <span className="block font-bold">Rute</span>
                        <span className="block">{ticket.rutes.nama_rute}</span>
                    </div>

                    <div className="border-b pb-2 mb-2">
                        <span className="block font-bold">Berangkat</span>
                        <span className="block">
                            {new Date(
                                ticket.jadwals.tanggal
                            ).toLocaleDateString()}
                            , {ticket.jadwals.keberangkatan} WIB
                        </span>
                    </div>
                    <div className="border-b pb-2 mb-2">
                        <span className="block font-bold">Tiba</span>
                        <span className="block">
                            {new Date(
                                ticket.jadwals.tanggal
                            ).toLocaleDateString()}
                            , {ticket.jadwals.tiba} WIB
                        </span>
                    </div>
                    <div className="pt-2 bg-navy">
                        <span className="block font-bold ml-3">
                            Harga Tiket
                        </span>
                        {ticket.transactions.map((t) => (
                            <span className="block ml-3" key={t.id}>
                                {new Intl.NumberFormat("id", {
                                    style: "currency",
                                    currency: "IDR",
                                    maximumFractionDigits: 0,
                                }).format(t.amount)}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-6">
                    <PDFDownloadLink
                        document={<CetakTiket ticket={ticket} />}
                        fileName="tiket.pdf"
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? (
                                <button
                                    className="bg-blue text-white py-2 px-4 rounded"
                                    disabled
                                >
                                    Loading document...
                                </button>
                            ) : (
                                <button className="bg-green text-white py-2 px-4 rounded hover:bg-blue">
                                    Download PDF
                                </button>
                            )
                        }
                    </PDFDownloadLink>
                </div>
            </div>
        </UserLayout>
    );
};

export default PDFPage;
