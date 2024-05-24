import UserLayout from "@/Layouts/UserLayout";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Riwayat = () => {
    const { auth, rute, kapal, jadwal } = usePage().props;

    return (
        <UserLayout>
            <div className="min-h-screen">
                <div className="pt-24 text-center text-2xl text-midnight font-serif">
                    <h1>Riwayat Rute</h1>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </UserLayout>
    );
};

export default Riwayat;
