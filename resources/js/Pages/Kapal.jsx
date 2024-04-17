import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import "../../../resources/css/action.css";
import "../../../resources/css/trash.css";

const Kapal = () => {
    const { flash, errors, kapals } = usePage().props;
    console.log(kapals);

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
    const deletePost = async (id) => {
        router.delete(`/kapal/${id}`);
    };
    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4">
                Data Nama Kapal
            </div>
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
            <div className="flex items-center justify-center">
                <div className="w-full max-w-sm p-4 bg-bermuda border border-gray rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray dark:border-gray">
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div>
                            <label
                                for="default-search"
                                className="mb-2 text-sm font-medium text-gray sr-only dark:text-bermuda"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-bermuda"
                                >
                                    Jadwal ID
                                </label>
                                <input
                                    type="text"
                                    // id="default-search"
                                    className="bg-sea border text-midnight border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("jadwal_id", e.target.value)
                                    }
                                    value={data.jadwal_id}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.jadwal_id}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label
                                for="default-search"
                                className="mb-2 text-sm font-medium text-gray sr-only dark:text-bermuda"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-bermuda"
                                >
                                    Nama Kapal
                                </label>
                                <input
                                    type="text"
                                    // id="default-search"
                                    className="bg-sea border text-midnight border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("nama_kapal", e.target.value)
                                    }
                                    value={data.nama_kapal}
                                />
                                <p className="text-red text-sm mt-2">
                                    {errors.nama_kapal}
                                </p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 text-bermuda bg-navy hover:bg-blue hover:text-bermuda focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-center rtl:text-right text-midnight">
                    <thead className="text-xs text-midnight uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Jadwal ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Kapal
                            </th>

                            <th scope="col" className=" py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {kapals.map((kapal, i) => {
                            return (
                                <tr key={i}>
                                    
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {kapal.jadwal_id}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {kapal.nama_kapal}
                                    </th>
                                    <td class="action">
                            <Link
                                // href={`/tickets/${ticket.id}/edit`}
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
                                                    deletePost(rute.id)
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
        </AdminLayout>
    );
};
export default Kapal;
