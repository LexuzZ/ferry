import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

const Index = () => {
    const { flash, errors, kapals, ships, userJadwals } = usePage().props;
    console.log(userJadwals);

    const {
        data,
        setData,
        reset,
        post: submit,
    } = useForm({
        jadwal_id: "",
        nama_kapal: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(route("kapals.store"));
    };
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
                Inertia.delete(`/kapal/${id}`);
                Swal.fire("Terhapus!", "Rute telah dihapus.", "success");
            }
        });
    };
    return (
        <AdminLayout>
            <div className="min-h-screen">
                <div className="text-center text-midnight text-2xl font-serif pt-8 pb-2">
                    INFORMASI KAPAL
                </div>
                <Link
                    href="/kapal/create"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 ms-4 overflow-hidden text-sm font-medium hover:bg-blue text-midnight rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray   hover:bg-blue  rounded-md ">
                        Tambah Kapal
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

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-center rtl:text-right text-midnight">
                        <thead className="text-xs text-white uppercase bg-gray font-bold">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Armada
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rute
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ships.map((kapal) => {
                                return (
                                    <tr key={kapal.id} className="bg-white">
                                        <th
                                            scope="row"
                                            className="py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                        >
                                            {kapal.nama_kapal}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                        >
                                            {kapal.rutes.nama_rute}
                                        </th>
                                        <td className="px-2 py-1">
                                            <Link
                                                href={`kapal/edit/${kapal.id}`}
                                                className="btn btn-sm me-3 bg-orange text-white hover:bg-yellow"
                                            >
                                                Edit
                                            </Link>

                                            <div
                                                className="btn btn-sm bg-red text-white hover:bg-orange"
                                                onClick={() =>
                                                    handleDelete(kapal.id)
                                                }
                                            >
                                                Hapus
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};
export default Index;
