
import Navbar from "@/Components/Navbar";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Detail = (props) => {
    const { auth, rute, kapal, jadwal } = usePage().props;

    return (
        
        <div className="bg-silver min-h-screen">
            <Navbar user={props.auth.user} />
            <div className="pt-24 text-center text-2xl text-midnight font-serif">
                <h1>Detail Rute</h1>
            </div>

            <div className="card card-side  shadow-xl mx-24 text-midnight">
                <div className="card-body">
                    
                    <h2 className="card-title">{rute.nama_rute}</h2>
                    {rute.kapals.map((k) => (
                        <p key={k.id}>{k.nama_kapal}</p>
                    ))}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-center text-midnight uppercase">
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Estimasi Tiba</th>
                                    <th>Estimasi Keberangkatan</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {rute.jadwals.map((j) => (
                                    <tr key={j.id} className="hover hover:text-silver">
                                        <td>{j.tanggal}</td>
                                        <td>{j.tiba}</td>
                                        <td>{j.keberangkatan}</td>
                                        <td><Link className="bg-navy px-2 rounded-md py-1"  href={route("login")}>Pesan</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary" href="/">Kembali</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
