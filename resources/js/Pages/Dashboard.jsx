import DownloadButton from "@/Components/DownloadButton";
import Role from "@/Components/Role";
import PaymentBadge from "@/Components/status";
import AdminLayout from "@/Layouts/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { ImUsers } from "react-icons/im";

export default function Dashboard() {
    const {
        userCount,
        totalTransaction,
        transactionPending,
        userList,
        transaction,
    } = usePage().props;

    return (
        <AdminLayout>
            <div className="h-min-screen pt-8 ">
                <div className="stats shadow w-full bg-white">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                                <line x1="4" y1="22" x2="4" y2="15"></line>
                            </svg>
                        </div>
                        <div className="stat-title text-midnight">
                            Total User
                        </div>
                        <div className="stat-value text-midnight">{userCount}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-green">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <div className="stat-title text-midnight">
                            Transaksi Berhasil
                        </div>
                        <div className="stat-value text-green">
                            {totalTransaction}
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-green">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div className="stat-title text-midnight">
                            Transaksi Pending
                        </div>
                        <div className="stat-value text-yellow">
                            {transactionPending}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6 pt-4">
                    <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-white  w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-midnight">
                                        Manajemen Pengguna
                                    </h3>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-4 bg-gray  text-white align-middle border border-solid border-white dark:border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                                Nama
                                            </th>
                                            <th className="px-4 bg-gray  text-white align-middle border border-solid border-white dark:border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                                Role
                                            </th>
                                            <th className="px-4 bg-gray  text-white align-middle border border-solid border-white dark:border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userList.data.map((user) => (
                                            <tr
                                                key={user.id}
                                                className="text-midnight font-medium "
                                            >
                                                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                    {user.name}
                                                </td>
                                                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center ">
                                                    <Role role={user.role} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-6">
                    <div className="bg-white shadow-md  p-6 rounded-md">
                        <div className="flex justify-start  items-center">
                            <div className="font-bold text-midnight mb-4">
                                Laporan Transaksi
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-end">
                            <div className="btn btn-link hover:text-white">
                                <DownloadButton />
                            </div>
                        </div> */}
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[460px]  text-sm text-center rtl:text-right text-white">
                                <thead>
                                    <tr>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-white py-2 px-4 bg-gray  rounded-tl-md rounded-bl-md">
                                            Penumpang
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-white py-2 px-4 bg-gray ">
                                            Total
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-white py-2 px-4 bg-gray  rounded-tr-md rounded-br-md">
                                            Status Pembayaran
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transaction.map((t) => (
                                        <tr key={t.id}>
                                            <td className="py-2 px-4 border-b text-white border-b-white ">
                                                <Link
                                                    // href={`/riwayat/${t.tickets.id}/pdf`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-link hover:text-midnight hover:underline"
                                                >
                                                    {t.tickets.nama}
                                                </Link>
                                            </td>
                                            <td className="py-2 px-4 border-b text-midnight border-b-white">
                                                {new Intl.NumberFormat("id", {
                                                    style: "currency",
                                                    currency: "IDR",
                                                    maximumFractionDigits: 0,
                                                }).format(t.amount)}
                                            </td>
                                            <td className="py-2 px-4 border-b border-b-white">
                                                <PaymentBadge
                                                    status={t.status}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
