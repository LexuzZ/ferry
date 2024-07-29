import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../../css/trash.css";
import "../../../css/action.css";
import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";

const Jadwal = ({ jadwals }) => {
    const { flash, errors } = usePage().props;

    const deletePost = async (id) => {
        router.delete(`/jadwals/${id}`);
    };
    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-serif py-8 uppercase">
                Informasi Jadwal
            </div>
            <Link
                href={`jadwals/create`}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 ms-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray hover:bg-blue  rounded-md ">
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
                    <thead className="text-xs text-center text-white uppercase bg-gray font-bold">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ETA
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ETD
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jadwals.map((jadwal, i) => {
                            return (
                                <tr key={i} className="text-center">
                                    <td className=" py-4 text-midnight  font-medium whitespace-nowrap dark:text-black">
                                        {new Date(
                                            jadwal.tanggal
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="   text-midnight  font-medium whitespace-nowrap dark:text-black">
                                        {jadwal.tiba}
                                    </td>
                                    <td className="   text-midnight  font-medium whitespace-nowrap dark:text-black">
                                        {jadwal.keberangkatan}
                                    </td>

                                    <td>
                                        <Link
                                            href={`jadwals/edit/${jadwal.id}`}
                                            className="btn me-5 bg-orange text-midnight hover:bg-yellow"
                                        >
                                            <CiEdit size={15} />
                                        </Link>

                                        <div
                                            className="btn bg-red text-midnight hover:bg-orange"
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        "my_modal_1"
                                                    )
                                                    .showModal()
                                            }
                                        >
                                            <BsTrash size={15} />
                                        </div>
                                        <dialog
                                            id="my_modal_1"
                                            className="modal"
                                        >
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
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div> */}
        </AdminLayout>
    );
};
export default Jadwal;
