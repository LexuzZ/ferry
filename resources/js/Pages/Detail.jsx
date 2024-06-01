import UserLayout from "@/Layouts/UserLayout";
import { Link, router, usePage } from "@inertiajs/react";
import React from "react";

const Detail = () => {
    const { auth, rute, kapal, jadwal } = usePage().props;

    return (
        <UserLayout>
            <div className="min-h-screen">
                <div className="pt-24 text-center text-2xl text-midnight font-serif">
                    <h1 className="uppercase mb-6">Jadwal Berdasarkan Rute Penyebrangan</h1>
                </div>

                <div className="card card-side bg-white shadow-xl mx-24 ">
                    <div className="card-body">
                        <h2 className="card-title text-midnight">{rute.nama_rute}</h2>
                        {kapal.map((k) => (
                            <p key={k.id} className="text-midnight">{k.nama_kapal}</p>
                        ))}
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-grey text-midnight uppercase">
                                    <tr>
                                        <th>Tanggal</th>
                                        <th>Estimasi Tiba</th>
                                        <th>Estimasi Keberangkatan</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody className="text-midnight">
                                    {jadwal.map((j) => (
                                        <tr key={j.id} className=" hover:bg-grey">
                                            <td>{j.tanggal}</td>
                                            <td>{j.tiba}</td>
                                            <td>{j.keberangkatan}</td>
                                            <td>
                                                <Link href={`/order/${j.id}`}>
                                                    Pesan
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="card-actions justify-end">
                            <Link
                                className="btn btn-primary"
                                href="/userDashboard"
                            >
                                Kembali
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </UserLayout>
    );
};

export default Detail;
