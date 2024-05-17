import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function userDashboard( ) {
    const [routeDetail, setRouteDetail] = useState('');
    const { auth, rutes, rute} = usePage().props;
    console.log(rute);
    return (
        <UserLayout>
            <div className=" flex items-center ">
                <section
                    className="hero min-h-screen  bg-cover bg-center "
                    style={{
                        backgroundImage:
                            'url("https://source.unsplash.com/random")',
                    }}
                >
                    <div className="container mx-auto text-center text-white">
                        <h1 className="text-5xl font-medium mb-6 text-white">
                            Selamat datang {auth.user.name}!
                        </h1>
                        <p className="text-xl mb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam viverra euismod odio, gravida pellentesque
                            urna varius vitae.
                        </p>
                        <Link
                            href="/userJadwal"
                            className="btn btn-primary mx-2 my-2"
                        >
                            Pesan Tiket
                        </Link>
                    </div>
                </section>
                {/* <h1>Rute: {rute.id}</h1>
                <h2>Jadwals:</h2>
                <ul>
                    {rute.jadwals.map((jadwal) => (
                        <li key={jadwal.id}>{jadwal.tanggal}</li>
                    ))}
                </ul> */}
            </div>
        </UserLayout>
    );
}
