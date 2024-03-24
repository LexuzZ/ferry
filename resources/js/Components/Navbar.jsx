import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-blue-950">
            <div className="flex-1">
                <a className="text-cyan-50 text-xl">
                    PT Damai Lautan Nusantara
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className=" text-cyan-50 btn btn-ghost rounded-btn"
                    >
                        Menu
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-cyan-50 bg-blue-950 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
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
                                        <span className="badge  text-cyan-50">New</span>
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
    );
};
export default Navbar;