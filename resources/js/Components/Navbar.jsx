import { Link } from "@inertiajs/react";
import logo from "../../../public/logo.png";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
const Navbar = ({ user }) => {
    
    return (
        
        <>
            {/* component */}
            <nav className=" bg-white  flex  justify-between items-center mx-auto px-8 h-20 text-midnight">
                {/* logo */}
                <div className="container mx-auto flex items-center justify-between">
                    <a className="flex items-center justify-between" href="/">
                        <div className=" flex-shrink-0">
                            <img
                                className="h-12 md:h-16 lg:h-20"
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div className="text-sm md:text-xl font-bold ">
                            Damai Lautan Nusantara
                        </div>
                    </a>
                </div>
                {/* end logo */}

                {/* login */}
                <div className="flex-initial">
                    <div className="flex justify-end items-center relative">
                        <div className="flex mr-4 items-center">
                            <a
                                className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                                href="#"
                            >
                                <div className="flex items-center relative cursor-pointer whitespace-nowrap ">
                                    Beranda
                                </div>
                            </a>
                        </div>

                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className=" text-midnight  btn btn-ghost rounded-btn"
                            >
                                Masuk DLN Ferry
                            </div>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-midnight bg-white sm:text-sm font-bold rounded-box w-52"
                            >
                                {!user ? (
                                    <>
                                        <li>
                                            <Link
                                                href={route("login")}
                                                as="button"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("register")}
                                                as="button"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                href={route(
                                                    "redirectAuthenticatedUsers"
                                                )}
                                                as="button"
                                                className="justify-between"
                                            >
                                                Dashboard
                                                <span className="badge  text-cyan-50">
                                                    New
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Logout
                                            </Link>
                                        </li>{" "}
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end login */}
            </nav>
        </>
    );
};
export default Navbar;
