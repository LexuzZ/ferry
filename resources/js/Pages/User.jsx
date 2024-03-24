import AdminLayout from "@/Layouts/AdminLayout";
import Pagination from "@/Components/Pagination";
import React from "react";
import { ImUsers } from "react-icons/im";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";

export default function Dashboard({ users, jadwals }) {
    
    const { data } = usePage().props;
    
    return (
        <AdminLayout>
            <div className="text-center text-midnight text-2xl font-bold py-4 mt-8">
                Daftar Pengguna
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-center rtl:text-right text-midnight">
                    <thead className="text-xs text-midnight uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                email
                            </th>

                            <th scope="col" className=" py-3">
                                role
                            </th>
                            <th scope="col" className=" py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight bg-silver font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {user.id}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {user.name}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {user.email}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {user.role}
                                    </th>

                                    <td className=" flex justify-center ">
                                        <Link class="bin-button">
                                            <svg
                                                class="bin-top"
                                                viewBox="0 0 39 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line
                                                    y1="5"
                                                    x2="39"
                                                    y2="5"
                                                    stroke="white"
                                                    stroke-width="4"
                                                ></line>
                                                <line
                                                    x1="12"
                                                    y1="1.5"
                                                    x2="26.0357"
                                                    y2="1.5"
                                                    stroke="white"
                                                    stroke-width="3"
                                                ></line>
                                            </svg>
                                            <svg
                                                class="bin-bottom"
                                                viewBox="0 0 33 39"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask
                                                    id="path-1-inside-1_8_19"
                                                    fill="white"
                                                >
                                                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                                                </mask>
                                                <path
                                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                                    fill="white"
                                                    mask="url(#path-1-inside-1_8_19)"
                                                ></path>
                                                <path
                                                    d="M12 6L12 29"
                                                    stroke="white"
                                                    stroke-width="4"
                                                ></path>
                                                <path
                                                    d="M21 6V29"
                                                    stroke="white"
                                                    stroke-width="4"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                
            </div>
        </AdminLayout>
    );
}
