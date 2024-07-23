import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import Swal from "sweetalert2";
import logo from "../../../public/logo.png";

export default function UserLayout({ children }) {
    const { auth, flash } = usePage().props;
    useEffect(() => {
        if (flash.success) {
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: flash.success,
            });
        }

        if (flash.error) {
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: flash.error,
            });
        }
    }, [flash]);

    return (
        <>
            <div className="min-h-screen bg-grey">
                <nav className="fixed top-0 z-50 w-full   border-b border-gray-200 bg-white dark:border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between rtl:justify-end">
                                <details className="sm:hidden dropdown">
                                    <summary className="btn m-1 text-white">
                                        Menu
                                    </summary>
                                    <ul className="menu dropdown-content bg-white text-midnight rounded-box z-[1] w-52 p-2 shadow">
                                        <li>
                                            <Link href={route("userDashboard")}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("jadwal.riwayat")}
                                            >
                                                Pesanan Saya
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={route("history.order")}>Riwayat Pesanan</Link>
                                        </li>
                                    </ul>
                                </details>
                                <div className="sm:hidden ml-36 w-full sm:w-auto">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md dropdown dropdown-end">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-midnight  hover:bg-gray hover:text-white focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <span className="px-2">
                                                        {auth.user.name}
                                                    </span>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>

                                <a
                                    href="/"
                                    className="ms-2 md:me-24 hidden md:block"
                                >
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-midnight">
                                        DLNFerry
                                    </span>
                                </a>
                                <NavLink
                                    href={route("userDashboard")}
                                    active={route().current("userDashboard")}
                                    className="me-4"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    href={route("jadwal.riwayat")}
                                    active={route().current("jadwal.riwayat")}
                                    className="me-4"
                                >
                                    Pesanan Saya
                                </NavLink>
                                <NavLink
                                    href={route("history.order")}
                                    active={route().current("history.order")}
                                >
                                    Riwayat Pesanan
                                </NavLink>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md dropdown dropdown-end">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-midnight  hover:bg-gray hover:text-white focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <span className="px-2">
                                                        {auth.user.name}
                                                    </span>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="min-h-screen">
                    <div className=" bg-grey">{children}</div>
                </main>
            </div>
        </>
    );
}
