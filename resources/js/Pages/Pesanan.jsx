
import UserLayout from "@/Layouts/UserLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";

const UserJadwal = () => {
    const { userJadwals } = usePage().props;
    
    return (
        <UserLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4">
                Informasi Jadwal
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-center rtl:text-right text-midnight">
                    <thead className="text-xs text-midnight uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Kapal
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Asal
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Tujuan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                tiba
                            </th>
                            <th scope="col" className="px-6 py-3">
                                keberangkatan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userJadwals.map((jadwal, i) => {
                            return (
                                <tr key={i}>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {jadwal.tanggal}
                                    </th>
                                    {jadwal.kapals.map((kapal, i) => (
                                        <th key={i}>{kapal.nama_kapal}</th>
                                    ))}

                                    {jadwal.rutes.map((rute, i) => (
                                        <th key={i}>{rute.asal}</th>
                                    ))}
                                    {jadwal.rutes.map((rute, i) => (
                                        <th key={i}>{rute.tujuan}</th>
                                    ))}

                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {jadwal.tiba}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {jadwal.keberangkatan}
                                    </th>
                                    <td><Link href="/pesanan" className="btn btn-primary mx-2 my-2">Pesan</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </UserLayout>
    );
};
export default UserJadwal;
