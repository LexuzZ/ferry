import React, { useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";
import NewsLists from "../Components/Homepage/ListRoute";
import dln4 from "../../../public/dln4.jpg";
import dln3 from "../../../public/dln3.jpg";
import dln2 from "../../../public/dln2.jpg";
import dln1 from "../../../public/dln1.jpg";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

export default function Homepage(props) {
    const { rutes, jadwal, kapal } = usePage().props;
    const [code, setCode] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get("/tickets/search", { code });
    };

    return (
        <div className=" min-h-screen  text-black text-2xl bg-grey">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="carousel w-full bg-neutral">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={dln4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle ">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={dln3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={dln2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={dln1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            <div className="ml-10 pt-5">
                <h1 className="text-midnight font-serif">Cari Tiket Anda</h1>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Masukkan code tiket"
                        className="rounded-md input-bordered "
                    />
                    <button type="submit" className="btn btn-sm bg-navy hover:bg-sea text-white ml-3">
                       Search
                    </button>
                </form>
            </div>

            

            <NewsLists rutes={props.rutes.data} />

            {/* <Ship kapal={props.kapal}/> */}
            {/* <h1>{rute.id}</h1> */}
            {/* <Detail/> */}
        </div>
    );
}
