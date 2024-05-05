import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import React from "react";
import { ImUsers } from "react-icons/im";

export default function Dashboard() {
    const { userCount, roles } = usePage().props;
    console.log(roles);
    return (
        <AdminLayout>
            <div className="p-6">
                <>{/* component */}</>
                <>
                    {/* component */}
                    <div>
                        <h3 className="text-base font-semibold leading-6 text-midnight ">
                            Last 30 days
                        </h3>
                        <dl className="mt-5 mb-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="relative overflow-hidden rounded-lg bg-gray px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <div className="absolute rounded-md bg-red p-3">
                                        <svg
                                            className="h-6 w-6 text-midnight"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 truncate text-sm font-medium text-midnight">
                                        Total User
                                    </p>
                                </dt>
                                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-midnight">
                                        {userCount}
                                    </p>

                                    <div className="absolute inset-x-0 bottom-0 bg-white px-4 py-4 sm:px-6">
                                        <div className="text-sm">
                                            <a
                                                href="/user"
                                                className="font-medium text-orange hover:text-red"
                                            >
                                                View all
                                                <span className="sr-only">
                                                    {" "}
                                                    Total Subscribers stats
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                            <div className="relative overflow-hidden rounded-lg bg-gray px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <div className="absolute rounded-md bg-orange p-3">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 truncate text-sm font-medium text-midnight">
                                        Avg. Open Rate
                                    </p>
                                </dt>
                                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray">
                                        58.16%
                                    </p>
                                    <p className="ml-2 flex items-baseline text-sm font-semibold text-green">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 self-center text-green"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            {" "}
                                            Increased by{" "}
                                        </span>
                                        5.4%
                                    </p>
                                    <div className="absolute inset-x-0 bottom-0 bg-white px-4 py-4 sm:px-6">
                                        <div className="text-sm">
                                            <a
                                                href="#"
                                                className="font-medium text-yellow hover:text-orange"
                                            >
                                                View all
                                                <span className="sr-only">
                                                    {" "}
                                                    Avg. Open Rate stats
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                            <div className="relative overflow-hidden rounded-lg bg-gray px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <div className="absolute rounded-md bg-blue p-3">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 truncate text-sm font-medium text-gray-300">
                                        Avg. Click Rate
                                    </p>
                                </dt>
                                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray">
                                        24.57%
                                    </p>
                                    <p className="ml-2 flex items-baseline text-sm font-semibold text-red">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 self-center text-red"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            {" "}
                                            Decreased by{" "}
                                        </span>
                                        3.2%
                                    </p>
                                    <div className="absolute inset-x-0 bottom-0 bg-white px-4 py-4 sm:px-6">
                                        <div className="text-sm">
                                            <a
                                                href="#"
                                                className="font-medium text-blue hover:text-green"
                                            >
                                                View all
                                                <span className="sr-only">
                                                    {" "}
                                                    Avg. Click Rate stats
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-white  w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-gray dark:text-gray">
                                        Users
                                    </h3>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-4 bg-white  text-white dark:text-gray align-middle border border-solid border-gray dark:border-gray py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Role
                                            </th>
                                            <th className="px-4 bg-white  text-white dark:text-gray align-middle border border-solid border-gray dark:border-gray py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Amount
                                            </th>
                                            <th className="px-4 bg-white  text-white dark:text-gray align-middle border border-solid border-gray dark:border-gray py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-midnight dark:text-gray">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                Administrator
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                1
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        70%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue">
                                                            <div
                                                                style={{
                                                                    width: "70%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-gray dark:text-gray">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                User
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                6
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        40%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue">
                                                            <div
                                                                style={{
                                                                    width: "40%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-gray-700 dark:text-gray">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                User
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                5
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        45%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red">
                                                            <div
                                                                style={{
                                                                    width: "45%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-gray-700 dark:text-gray">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                User
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                4
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        60%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red">
                                                            <div
                                                                style={{
                                                                    width: "60%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray shadow-md shadow-black/5 p-6 rounded-md">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-medium">Activities</div>
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="dropdown-toggle text-gray hover:text-gray"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray w-full max-w-[140px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <table className="w-full min-w-[540px]">
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Lorem Ipsum
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-gray">
                                                02-02-2024
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-gray">
                                                17.45
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="dropdown-toggle text-gray hover:text-gray text-sm w-6 h-6 rounded flex items-center justify-center bg-gray"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </button>
                                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray w-full max-w-[140px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                                        >
                                                            Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                                        >
                                                            Settings
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                                        >
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Lorem Ipsum
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-gray">
                                                02-02-2024
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-gray">
                                                17.45
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="dropdown-toggle text-gray hover:text-gray text-sm w-6 h-6 rounded flex items-center justify-center bg-gray"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </button>
                                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray w-full max-w-[140px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                                        >
                                                            Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                                        >
                                                            Settings
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                                        >
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white border border-gray shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-medium">Order Statistics</div>
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="dropdown-toggle text-gray hover:text-gray"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray w-full max-w-[140px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <div className="rounded-md border border-dashed border-gray p-4">
                                <div className="flex items-center mb-0.5">
                                    <div className="text-xl font-semibold">
                                        10
                                    </div>
                                    <span className="p-1 rounded text-[12px] font-semibold bg-blue/10 text-blue leading-none ml-1">
                                        $80
                                    </span>
                                </div>
                                <span className="text-gray text-sm">
                                    Active
                                </span>
                            </div>
                            <div className="rounded-md border border-dashed border-gray p-4">
                                <div className="flex items-center mb-0.5">
                                    <div className="text-xl font-semibold"></div>
                                    <span className="p-1 rounded text-[12px] font-semibold bg-emerald/10 text-emerald leading-none ml-1">
                                        +$469
                                    </span>
                                </div>
                                <span className="text-gray text-sm">
                                    Completed
                                </span>
                            </div>
                            <div className="rounded-md border border-dashed border-gray p-4">
                                <div className="flex items-center mb-0.5">
                                    <div className="text-xl font-semibold">
                                        4
                                    </div>
                                    <span className="p-1 rounded text-[12px] font-semibold bg-rose/10 text-rose leading-none ml-1">
                                        -$130
                                    </span>
                                </div>
                                <span className="text-gray text-sm">
                                    Canceled
                                </span>
                            </div>
                        </div>
                        <div>
                            <canvas id="order-chart" />
                        </div>
                    </div>
                    <div className="bg-white border border-gray shadow-md shadow-black/5 p-6 rounded-md">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-medium">Earnings</div>
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="dropdown-toggle text-gray hover:text-gray"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray w-full max-w-[140px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray hover:text-blue hover:bg-gray"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[460px]">
                                <thead>
                                    <tr>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray py-2 px-4 bg-gray text-left rounded-tl-md rounded-bl-md">
                                            Service
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray py-2 px-4 bg-gray text-left">
                                            Earning
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray py-2 px-4 bg-gray text-left rounded-tr-md rounded-br-md">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-emerald">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-emerald/10 text-emerald font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-rose">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-rose/10 text-rose font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-emerald">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-emerald/10 text-emerald font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-rose">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-rose/10 text-rose font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-emerald">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-emerald/10 text-emerald font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-rose">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-rose/10 text-rose font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-emerald">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-emerald/10 text-emerald font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-rose">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-rose/10 text-rose font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-emerald">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-emerald/10 text-emerald font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray text-sm font-medium hover:text-blue ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="text-[13px] font-medium text-rose">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray">
                                            <span className="inline-block p-1 rounded bg-rose/10 text-rose font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
