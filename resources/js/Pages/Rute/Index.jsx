import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

const Index = ({ rutes, ships }) => {
    const { flash, errors } = usePage().props;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Anda tidak dapat mengembalikan ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/rute/${id}`);
                Swal.fire("Terhapus!", "Rute telah dihapus.", "success");
            }
        });
    };

    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-serif py-8">
                Informasi Rute
            </div>

            <Link
                href="/rute/create"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 ms-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-blue hover:text-midnight dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-navy dark:bg-blue-900 rounded-md group-hover:bg-gray">
                    Tambah
                </span>
            </Link>
            {flash.message && (
                <div
                    className="flex items-center p-4 mb-4 text-sm text-midnight rounded-lg  dark:text-green"
                    role="alert"
                >
                    <svg
                        className="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Success alert!</span>{" "}
                        {flash.message}
                    </div>
                </div>
            )}

            <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-center rtl:text-right text-midnight">
                    <thead className="text-xs text-white text-center uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Rute
                            </th>

                            <th scope="col" className=" py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {rutes.map((rute) => (
                            <tr key={rute.id}>
                                <td
                                    scope="row"
                                    className=" py-4 text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    {rute.nama_rute}
                                </td>
                                <td className=" ">
                                    <Link
                                        href={`rute/edit/${rute.id}`}
                                        className="btn me-5 bg-orange text-white hover:bg-yellow"
                                    >
                                        <CiEdit size={20} />
                                    </Link>

                                    <div
                                        className="btn bg-red text-white hover:bg-orange"
                                        onClick={() => handleDelete(rute.id)}
                                    >
                                        <BsTrash size={20}/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};
export default Index;
