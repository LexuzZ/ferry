import AdminLayout from "@/Layouts/AdminLayout";
import UserLayout from "@/Layouts/UserLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";

const UserJadwal = () => {
    const { userJadwals, rutes } = usePage().props;
    console.log(userJadwals);
    console.log(rutes);
    return (
        <UserLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4 mt-14">
                Informasi Jadwal
            </div>
            <div className="mt-4 mb-10 flex items-center justify-center">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                        Pilih Rute Tujuan Anda
                    </option>
                    {rutes.map((rute) => (
                        <option value={rute.id} key={rute.id}>
                            {rute.nama_rute}
                        </option>
                    ))}
                </select>
            </div>

            <div className=" overflow-x-auto shadow-md  mt-6 px-4">
                <table className="table table-md sm:rounded-lg">
                    <thead className="text-xs text-white text-center uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rute
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kapal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ETA
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ETd
                            </th>

                            <th scope="col" className=" py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-center">
                        {userJadwals.map((rute) => (
                            <tr key={rute.id}>
                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    {rute.id}
                                </td>
                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    {rute.nama_rute}
                                </td>

                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    <ul>
                                        {rute.kapals.map((kapal) => (
                                            <li key={kapal.id}>
                                                {kapal.nama_kapal}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    <ul>
                                        {rute.jadwals.map((jadwal) => (
                                            <li key={jadwal.id}>
                                                {jadwal.tanggal}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    <ul>
                                        {rute.jadwals.map((jadwal) => (
                                            <li key={jadwal.id}>
                                                {jadwal.tiba}
                                            </li>
                                        ))}
                                    </ul>
                                </td>

                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    <ul>
                                        {rute.jadwals.map((jadwal) => (
                                            <li key={jadwal.id}>
                                                {jadwal.keberangkatan}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                {rute.kapals.map((kapal, i) => (
                                    <Link
                                        key={i}
                                        href={`seats/${kapal.id}`}
                                        className="btn btn-primary m-3"
                                    >
                                        Pesan
                                    </Link>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <div className="relative overflow-x-auto shadow-md  mt-6 px-6 rounded-lg">
                <table className="table table-md text-sm text-center rtl:text-right text-midnight">
                    <thead className="text-xs text-white uppercase bg-gray font-bold">
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
                                        <th key={i}>{rute.nama_rute}</th>
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
                                    {jadwal.kapals.map((kapal, i) => (
                                        <Link key={i} href={`seats/${kapal.id}`} className="btn btn-primary m-3">Pesan</Link>
                                    ))}
                                    
                                    <td><Link href={`seats/${jadwal.id}`} className="btn btn-primary mx-2 my-2">Pesan</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div> */}

            {/* <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div> */}
        </UserLayout>
    );
};
export default UserJadwal;
