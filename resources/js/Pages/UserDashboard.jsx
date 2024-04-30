import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function userDashboard() {
    const { auth } = usePage().props;
    return (
        <UserLayout>
            <div className=" flex items-center">
                <section
                    className="w-full bg-cover bg-center py-32"
                    style={{
                        backgroundImage:
                            'url("https://source.unsplash.com/random")',
                    }}
                >
                    <div className="container mx-auto text-center text-white">
                        <h1 className="text-5xl font-medium mb-6">
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
            </div>
        </UserLayout>
    );
}
