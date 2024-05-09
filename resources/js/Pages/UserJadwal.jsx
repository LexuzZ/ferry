import UserLayout from "@/Layouts/UserLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const UserJadwal = ({ rutes }) => {
    return (
        <UserLayout>
            <div className=" overflow-x-auto shadow-md sm:rounded-lg pt-24 px-4">
                <table className="table table-md">
                    <thead className="text-xs text-white text-center uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rute
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Kapal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jadwal
                            </th>

                            <th scope="col" className=" py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-center">
                        {rutes.map((rute) => (
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

                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                  
                                    <button
                                        className="btn"
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_1")
                                                .showModal()
                                        }
                                    >
                                        {rute.id}
                                    </button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box bg-grey text-midnight">
                                            <h3 className="flex items-start justify-start font-bold text-lg">
                                                Rute Keberangkatan :{" "}
                                                {rute.nama_rute}
                                            </h3>
                                            <p className="flex items-start justify-start py-4">
                                                {rute.kapals.map((kapal) => (
                                                    <p key={kapal.id}>
                                                        Nama Kapal :{" "}
                                                        {kapal.nama_kapal}
                                                    </p>
                                                ))}
                                            </p>
                                            <div className="overflow-x-auto">
                                                <table className="table">
                                                    {/* head */}
                                                    <thead className="text-midnight">
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>ETA</th>
                                                            <th>ETD</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* row 1 */}
                                                        {rute.jadwals.map(
                                                            (jadwal) => (
                                                                <tr key={jadwal.id}>
                                                                    <td>
                                                                        {jadwal.tanggal}
                                                                    </td>
                                                                    <td>
                                                                        {jadwal.tiba}
                                                                    </td>
                                                                    <td>
                                                                        {jadwal.keberangkatan}
                                                                    </td>
                                                                    <td>
                                                                        <button>pesan</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </UserLayout>
    );
};

export default UserJadwal;
