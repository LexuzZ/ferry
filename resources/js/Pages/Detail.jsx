import UserLayout from "@/Layouts/UserLayout";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Detail = () => {
    const { auth, rute, kapal, jadwal } = usePage().props;

    return (
        <UserLayout>
            <div className="pt-24 text-center text-2xl text-midnight font-serif">
                <h1>Detail Rute</h1>
            </div>

            <div className="card card-side bg-base-100 shadow-xl mx-24 ">
                <div className="card-body">
                    
                    <h2 className="card-title">{rute.nama_rute}</h2>
                    {kapal.map((k) => (
                        <p key={k.id}>{k.nama_kapal}</p>
                    ))}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Estimasi Tiba</th>
                                    <th>Estimasi Keberangkatan</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {jadwal.map((j) => (
                                    <tr key={j.id} className="hover">
                                        <td>{j.tanggal}</td>
                                        <td>{j.tiba}</td>
                                        <td>{j.keberangkatan}</td>
                                        <td><Link>Pesan</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary" href="/userJadwal">Kembali</Link>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Detail;
