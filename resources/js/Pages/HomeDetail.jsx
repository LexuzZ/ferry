import Navbar from "@/Components/Navbar";
import { Link, router, usePage } from "@inertiajs/react";

const Detail = (props) => {
    const { rute } = usePage().props;
    

    return (
        <div className="bg-grey min-h-screen w-full">
            <Navbar user={props.auth.user} />
            <div className="pt-8 text-center text-2xl text-midnight font-serif">
                <h1>Detail Rute</h1>
            </div>

            <div className="card card-side shadow mt-4 mx-4 bg-white text-midnight">
                <div className="card-body">
                    <h2 className="card-title hidden md:block">
                        {rute.nama_rute}
                    </h2>
                    {rute.kapals.map((k) => (
                        <p key={k.id} className="hidden md:block">
                            {k.nama_kapal}
                        </p>
                    ))}
                    <div className="overflow-x-auto rounded-lg   mx-4 hidden md:block">
                        <table className="w-full ">
                            {/* head */}
                            <thead className="text-center border-b-2 ">
                                <tr>
                                    <th className="p-3 text-sm font-semibold tracking-wide">
                                        Tanggal
                                    </th>
                                    <th className="p-3 text-sm font-semibold tracking-wide">
                                        Est. Tiba
                                    </th>
                                    <th className="p-3 text-sm font-semibold tracking-wide">
                                        Est. Keberangkatan
                                    </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody className="text-center ">
                                {rute.jadwals.map((j) => (
                                    <tr
                                        key={j.id}
                                        className="hover hover:text-gray"
                                    >
                                        <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                            {new Date(
                                                j.tanggal
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                            {j.tiba}
                                        </td>
                                        <td className="p-3 text-sm text-midnight whitespace-nowrap">
                                            {j.keberangkatan}
                                        </td>
                                        <td className="btn btn-sm m-3  hover:bg-orange bg-green text-white font-bold hover:underline text-sm ">
                                            <Link href={`/order/${j.id}`} >
                                                Pesan
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        <div className="text-center">
                            <h2 className="font-serif font-semibold">
                                {rute.nama_rute}
                            </h2>
                            {rute.kapals.map((k) => (
                                <p key={k.id}>{k.nama_kapal}</p>
                            ))}
                        </div>

                        {rute.jadwals.map((t) => (
                            <div className="">
                                <div className="bg-white p-4 mt-1  mx-4 space-y-3 rounded-lg shadow">
                                    <div className="flex items-center space-x-2 text-sm">
                                        <div className="badge rounded-bl-badge text-white text-sm">
                                            {new Date(
                                                t.tanggal
                                            ).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="flex text-midnight font-normal text-sm">
                                        <div className="w-1/2 ">
                                            ETA{" "}
                                        </div>
                                        <div className="w-1/2">{t.tiba}</div>
                                    </div>
                                    <div className="flex text-midnight font-normal text-sm">
                                        <div className="w-1/2 ">
                                            ETD{" "}
                                        </div>
                                        <div className="w-1/2">{t.keberangkatan}</div>
                                    </div>
                                    
                                    <div className="text-midnight font-medium text-sm">
                                        <Link
                                            href={route("login")}
                                            className="btn btn-sm hover:bg-orange bg-green text-white font-bold hover:underline text-sm"
                                        >
                                            Pesan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card-actions mt-4  justify-end md:mr-20 lg:mr-28">
                        <Link
                            className="btn btn-sm bg-red text-sm text-white"
                            href="/"
                        >
                            Kembali
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
