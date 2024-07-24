import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../../css/action.css";
import "../../../css/trash.css";

const Index = ({ rutes, ships }) => {
    const { flash, errors } = usePage().props;
    

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

                               

                                <td class="action">
                                    <Link
                                        href={`rute/edit/${rute.id}`}
                                        class="Btn"
                                    >
                                        Edit
                                        <svg class="svg" viewBox="0 0 512 512">
                                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                        </svg>
                                    </Link>

                                    <div
                                        class="del"
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_1")
                                                .showModal()
                                        }
                                    >
                                        <div>Delete</div>
                                    </div>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box bg-cyan-50">
                                            <h3 className="font-bold text-lg">
                                                Hello!
                                            </h3>
                                            <p className="py-4 font-bold text-base">
                                                Apakah yakin menghapus data?
                                            </p>
                                            <div className="modal-action ">
                                                <form method="dialog">
                                                    <button
                                                        onClick={() =>
                                                            deletePost(
                                                                jadwal.id
                                                            )
                                                        }
                                                        className="btn btn-error m-2"
                                                    >
                                                        Hapus
                                                    </button>
                                                    <button className="btn btn-ghost">
                                                        Tutup
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
        </AdminLayout>
        
       
        
    );
};
export default Index;
