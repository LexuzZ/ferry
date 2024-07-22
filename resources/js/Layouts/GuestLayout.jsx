import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import logo from "../../../public/logo.png";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pb-10 pt-6 bg-grey">
            <div className="flex justify-center mb-6 w-full">
                <Link href="/">
                    <img
                        src={logo}
                        className="mx-auto w-1/2 sm:w-1/4 md:w-1/6"
                        alt="Logo"
                    />
                </Link>
            </div>

            <div className="w-full max-w-xs sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}
