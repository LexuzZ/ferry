import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import React from "react";
import { ImUsers } from "react-icons/im";

export default function Dashboard() {
    const { userCount, roles } = usePage().props;
    console.log(roles);
    return (
        <AdminLayout>
            {/* <div className="p-4  bg-silver text-midnight rounded-lg  mt-7">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="max-w-sm p-6 bg-bermuda  rounded-lg shadow dark:bg-bermuda">
                        <div className="flex items-center justify-start px-4 mb-4">
                            <ImUsers size={80}/>

                            <h5 className="flex justify-end items-center mx-4   tracking-tight text-midnight ">
                                Jumlah Pengguna 
                            </h5>
                            <tr></tr>
                            <div className="font-bold flex justify-end text-midnight text-2xl">
                            {userCount}
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a
                                href="/user"
                                className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-bermuda bg-gray rounded-lg hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue dark:bg-blue dark:hover:bg-navy dark:focus:ring-blue"
                            >
                                Data User
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-24 rounded bg-gray dark:bg-gray">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray dark:bg-gray-800">
                        <p className="text-2xl text-gray dark:text-gray">
                            <svg
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray dark:bg-gray">
                    <p className="text-2xl text-gray dark:text-gray">
                        <svg
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                            />
                        </svg>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-md border border-grey p-6 shadow-md ">
                        <div className="flex justify-between mb-6">
                            <div>
                                <div className="flex items-center mb-1">
                                    <div className="text-2xl font-semibold text-midnight">
                                        {userCount}
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-grey">
                                    Users
                                </div>
                            </div>
                        </div>
                        <a
                            href="/user"
                            className="text-[#f84525] font-medium text-sm hover:text-red-800"
                        >
                            View
                        </a>
                    </div>
                    <div className="bg-white rounded-md border border-grey p-6 shadow-md shadow-black/5">
                        <div className="flex justify-between mb-4">
                            <div>
                                <div className="flex items-center mb-1">
                                    <div className="text-2xl font-semibold text-midnight">
                                        100
                                    </div>
                                    <div className="p-1 rounded  text-green text-[12px] font-semibold leading-none ml-2">
                                        +30%
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    Companies
                                </div>
                            </div>
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a
                            href="/dierenartsen"
                            className="text-[#f84525] font-medium text-sm hover:text-red-800"
                        >
                            View
                        </a>
                    </div>
                    <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                        <div className="flex justify-between mb-6">
                            <div>
                                <div className="text-2xl font-semibold mb-1">
                                    100
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    Blogs
                                </div>
                            </div>
                            
                        </div>
                        <a
                            href=""
                            className="text-[#f84525] font-medium text-sm hover:text-red-800"
                        >
                            View
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                                        Users
                                    </h3>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Role
                                            </th>
                                            <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Amount
                                            </th>
                                            <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles && roles.map((role)=>(
                                            <p>{role.role}</p>
                                        ))}
                                        <tr className="text-midnight dark:text-grey">
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
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                            <div
                                                                style={{
                                                                    width: "70%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-gray-700 dark:text-gray-100">
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
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                            <div
                                                                style={{
                                                                    width: "40%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-gray-700 dark:text-gray-100">
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
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                                                            <div
                                                                style={{
                                                                    width: "45%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-gray-700 dark:text-gray-100">
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
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                            <div
                                                                style={{
                                                                    width: "60%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
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
                    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-medium">Activities</div>
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
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
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Lorem Ipsum
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                02-02-2024
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                17.45
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </button>
                                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                        >
                                                            Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                        >
                                                            Settings
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                        >
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Lorem Ipsum
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                02-02-2024
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                17.45
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                                                >
                                                    <i className="ri-more-2-fill" />
                                                </button>
                                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                        >
                                                            Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                                        >
                                                            Settings
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
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
                    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-medium">Order Statistics</div>
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <div className="rounded-md border border-dashed border-gray-200 p-4">
                                <div className="flex items-center mb-0.5">
                                    <div className="text-xl font-semibold">
                                        10
                                    </div>
                                    <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                                        $80
                                    </span>
                                </div>
                                <span className="text-gray-400 text-sm">
                                    Active
                                </span>
                            </div>
                            <div className="rounded-md border border-dashed border-gray-200 p-4">
                                <div className="flex items-center mb-0.5">
                                    <div className="text-xl font-semibold">
                                        50
                                    </div>
                                    <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                                        +$469
                                    </span>
                                </div>
                                <span className="text-gray-400 text-sm">
                                    Completed
                                </span>
                            </div>
                            <div className="rounded-md border border-dashed border-gray-200 p-4">
                                <div className="flex items-center mb-0.5">
                                    <div className="text-xl font-semibold">
                                        4
                                    </div>
                                    <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">
                                        -$130
                                    </span>
                                </div>
                                <span className="text-gray-400 text-sm">
                                    Canceled
                                </span>
                            </div>
                        </div>
                        <div>
                            <canvas id="order-chart" />
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-medium">Earnings</div>
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                                >
                                    <i className="ri-more-fill" />
                                </button>
                                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
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
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                                            Service
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                            Earning
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-emerald-500">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-rose-500">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-emerald-500">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-rose-500">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-emerald-500">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-rose-500">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-emerald-500">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-rose-500">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Withdrawn
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-emerald-500">
                                                +$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://placehold.co/32x32"
                                                    alt=""
                                                    className="w-8 h-8 rounded object-cover block"
                                                />
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-rose-500">
                                                -$235
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
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
