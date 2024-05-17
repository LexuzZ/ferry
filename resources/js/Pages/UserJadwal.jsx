import UserLayout from "@/Layouts/UserLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const UserJadwal = () => {
    const { auth, rutes } = usePage().props;
    const [isOpen, setIsOpen] = useState(true);
    return (
        <UserLayout>
            <div className=" overflow-x-auto shadow-md sm:rounded-lg pt-24 px-10">
                <table className="table table-md">
                    <thead className="text-xs text-white text-center uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rute
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

                                <td>
                                    <Link
                                        className="btn bg-navy text-white"
                                        href={`/userJadwal/${rute.id}/detail`}
                                    >
                                        Detail Keberangkatan
                                    </Link>
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
