import UserLayout from "@/Layouts/UserLayout";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const FormOrder = () => {
    const { jadwal, rute, user } = usePage().props;
    console.log(rute);
    console.log(user);

    return (
        <UserLayout>
            {/* <form className="pt-24 text-center text-2xl text-midnight font-serif">
                <h1 className="flex items-center justify-start badge badge-outline ml-4">{user}</h1>
                <p>{jadwal.tanggal}</p>
                

            </form> */}
            <div className="flex items-center justify-center min-h-screen py-24">
                <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center">
                        Reservasi Tiket 
                    </h2>
                    <p className="text-center text-gray">
                        Isi form data dibawah dengan benar!
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="first_name"
                            >
                                Nama Pemesan :{" "}
                                <h1 className="badge badge-neutral">
                                    {user.name}
                                </h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="first_name"
                            >
                                Email Pemesan :{" "}
                                <h1 className="badge badge-neutral">
                                    {user.email}
                                </h1>
                            </label>
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                Departure : <h1 className="badge badge-neutral">{jadwal.tanggal}</h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                ETA : <h1 className="badge badge-neutral">{jadwal.tiba}</h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                ETD : <h1 className="badge badge-neutral">{jadwal.keberangkatan}</h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_out"
                            >
                                Check Out
                            </label>
                            <input
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                type="date"
                                id="check_out"
                                name="check_out"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="adults"
                            >
                                Number of adults
                            </label>
                            <input
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                type="number"
                                id="adults"
                                name="adults"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="children"
                            >
                                Children (3-16 years old)
                            </label>
                            <input
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                type="number"
                                id="children"
                                name="children"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="infants"
                            >
                                Infants (0-3 years old)
                            </label>
                            <input
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                type="number"
                                id="infants"
                                name="infants"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="details"
                            >
                                More details about your inquiry
                            </label>
                            <textarea
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                id="details"
                                name="details"
                                rows={3}
                                defaultValue={""}
                            />
                        </div>
                        <div>
                            <button
                                className="w-full px-4 py-2 font-semibold text-white bg-red rounded-md hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    );
};

export default FormOrder;
