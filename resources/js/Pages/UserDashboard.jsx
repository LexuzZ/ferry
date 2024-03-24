import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Dashboard() {
    const { auth } = usePage().props;
    return (
        <UserLayout>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-blue-950 shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-cyan-50 border-b text-black">
                            You're logged in as {auth.user.role}!
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </UserLayout>
    );
}
