import React, { useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";

export default function Homepage(props) {
    const { rutes } = usePage().props;
    
    return (
        <div className=" min-h-screen  text-black text-2xl bg-grey">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

            {/* component */}
           
            <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-6 px-8 pb-6">
                <table className="table table-md">
                    <thead className="text-xs text-white text-center uppercase bg-gray font-bold">
                        <tr>
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
                    <tbody className="bg-white text-center">
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}
