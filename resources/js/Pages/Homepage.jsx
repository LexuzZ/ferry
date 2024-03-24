import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";

export default function Homepage(props) {
    return (
        <div className=" min-h-screen  text-black text-2xl bg-slate-300">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <h1 className="text-center text-black pt-4">Daftar Harga Tiket</h1>
            {/* <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div> */}
        </div>
    );
}