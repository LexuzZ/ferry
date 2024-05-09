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
                                    {/* <button onClick={() => setIsOpen(true)}>
                                        Open Modal
                                    </button> */}
                                    {/* {isOpen && (
                                        <div>
                                            <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-gray-800">
                                                <div className="flex justify-center items-end text-center min-h-screen sm:block">
                                                    <div className="bg-gray-500 transition-opacity bg-opacity-75" />
                                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                                                        ​
                                                    </span>
                                                    <div
                                                        className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform
  shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
                                                    >
                                                        <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                                                            <div className="grid grid-cols-1">
                                                                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                                                                    <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                                                                        <img
                                                                            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                                                            className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                                                                        />
                                                                        <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                                                                            Mark
                                                                            Xenon
                                                                        </p>
                                                                        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">
                                                                            I am
                                                                            a
                                                                            fullstack
                                                                            software
                                                                            developer
                                                                            with
                                                                            ReactJS
                                                                            for
                                                                            frontend
                                                                            and
                                                                            NodeJS
                                                                            for
                                                                            backend
                                                                        </p>
                                                                        <div className="w-full mt-6">
                                                                            <a
                                                                                className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
              font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                            >
                                                                                Hire
                                                                                me
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Close Modal
                                            </button>
                                        </div>
                                    )} */}
                                </td>

                                {/* <td>
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
                                                    <thead className="text-midnight">
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>ETA</th>
                                                            <th>ETD</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {rute.jadwals.map(
                                                            (jadwal) => (
                                                                <tr
                                                                    key={
                                                                        jadwal.id
                                                                    }
                                                                >
                                                                    <td>
                                                                        {
                                                                            jadwal.tanggal
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            jadwal.tiba
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            jadwal.keberangkatan
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        <button>
                                                                            pesan
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </UserLayout>
    );
};

export default UserJadwal;
