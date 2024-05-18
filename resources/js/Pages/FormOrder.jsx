import UserLayout from "@/Layouts/UserLayout";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const FormOrder = () => {
    const { jadwal, ticket, user, flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        jadwal_id: "",
        penumpang: "",
        kendaraan: "",
       
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ticket.store"));
    };

    return (
        <UserLayout>
            {flash.message && (
                <div
                    className="flex items-center pt-24 text-center text-sm text-midnight rounded-lg  dark:text-green"
                    role="alert"
                >
                    <svg
                        className="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Success alert!</span>{" "}
                        {flash.message}
                    </div>
                </div>
            )}
            <div className="flex items-center justify-center min-h-screen pt-24">
                <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-midnight">
                        DAMAI LAUTAN NUSANTARA
                    </h2>
                    <p className="text-center text-gray">
                        Isi form reservasi tiket dibawah dengan benar!
                    </p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="first_name"
                            >
                                Nama Pemesan :{" "}
                                <h1 className="badge badge-neutral">
                                    {user.name}
                                </h1>
                            </label>
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="first_name"
                            >
                                Email Pemesan :{" "}
                                <h1 className="badge badge-neutral">
                                    {user.email}
                                </h1>
                            </label>
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                Jadwal Keberangkatan :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.tanggal}
                                </h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                ID Jadwal :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.id}
                                </h1>
                            </label>
                        </div>
                        
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                Estimasi Tiba :{" "}
                                <h1 className="badge badge-neutral">
                                    {jadwal.tiba}
                                </h1>
                            </label>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray"
                                htmlFor="check_in"
                            >
                                Estimasi Keberangkatan :{" "}
                                <h1 className="badge badge-neutral">
                                    {" "}
                                    {jadwal.keberangkatan}
                                </h1>
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="jenis_penumpang"
                                className="block text-sm font-medium text-gray"
                            >
                                Masukkan ID Jadwal dibawah
                            </label>
                            
                                <input
                                    type="number"
                                    // id="default-search"
                                    className=" border  border-gray-300 text-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                    placeholder="enter ..."
                                    // required
                                    onChange={(e) =>
                                        setData("jadwal_id", e.target.value)
                                    }
                                    value={data.jadwal_id}
                                />
                           <p className="text-red text-sm mt-2">
                                    {errors.jadwal_id}
                                </p>
                        </div>
                        <div>
                            <label
                                htmlFor="jenis_penumpang"
                                className="block text-sm font-medium text-gray"
                            >
                                Jenis Penumpang:
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                id="jenis_penumpang"
                                value={data.penumpang}
                                onChange={(e) =>
                                    setData("penumpang", e.target.value)
                                }
                            >
                                <option value="">Pilih Jenis Penumpang</option>
                                <option value="Dewasa">Dewasa</option>
                                <option value="Anak-anak">Anak-anak</option>
                                <option value="Balita">Balita</option>
                            </select>
                            <p className="text-red text-sm mt-2">
                                    {errors.penumpang}
                                </p>
                        </div>
                        <div>
                            <label
                                htmlFor="jenis_penumpang"
                                className="block text-sm font-medium text-gray"
                            >
                                Jenis Kendaraan:
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                id="jenis_penumpang"
                                value={data.kendaraan}
                                onChange={(e) =>
                                    setData("kendaraan", e.target.value)
                                }
                            >
                                <option value="">Pilih Jenis Kendaraan</option>
                                <option value="Sepeda">Sepeda</option>
                                <option value="Sepeda Motor s.d 250cc">
                                    Sepeda Motor s.d 250cc
                                </option>
                                <option value="Sepeda Motor s.d 1000cc">
                                    Sepeda Motor s.d 1000cc
                                </option>
                                <option value="Sepeda Motor s.d 1001cc">
                                    Sepeda Motor s.d 1001cc
                                </option>
                                <option value="Kendaraan s.d 2000cc">
                                    Kendaraan s.d 2000cc
                                </option>
                                <option value="Kendaraan 2001cc ke Atas">
                                    Kendaraan 2001cc ke atas
                                </option>
                                <option value="Kendaraan s.d s.d 3001cc">
                                    Kendaraan s.d 3001cc
                                </option>
                                <option value="Truk Sedang">Truk Sedang</option>
                                <option value="Truk Besar">Truk Besar </option>
                                <option value="Tronton">Tronton</option>
                                <option value="Alat Berat">Alat Berat</option>
                            </select>
                            {errors.kendaraan && (
                                <span>{errors.kendaraan}</span>
                            )}
                        </div>

                        <div>
                            <button
                                className="w-full px-4 py-2 font-semibold text-white bg-navy rounded-md hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                        <div>
                            <Link
                                className="w-full px-4 py-2 font-semibold text-white bg-red rounded-md hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                href="/userJadwal"
                            >
                                Kembali
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="ml-10">
                <h1>Data Penumpang : {user.name}</h1>
                {/* <Link href={route('penumpang.create')}>Tambah Penumpang</Link> */}
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Jenis Penumpang</th>
                            <th>Jenis Kendaraan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticket.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.penumpang}</td>
                                <td>{p.kendaraan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </UserLayout>
    );
};

export default FormOrder;
