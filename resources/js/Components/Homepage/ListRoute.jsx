import { Link, router } from "@inertiajs/react";

const isRute = (rutes) => {
    console.log(rutes);
    return (
        <div>
            <div className="flex items-center justify-start mt-10 mx-10 text-midnight font-serif">Cari Tiket Anda</div>
            <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-10 pb-5">
                <table className="table table-md">
                    <thead className="text-xs text-white text-center uppercase bg-gray font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rute
                            </th>

                            <th scope="col" className=" py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-silver text-center hover">
                        {rutes.map((rute) => (
                            <tr key={rute.id}>
                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    {rute.id}
                                </td>
                                <td
                                    scope="row"
                                    className=" py-4  text-midnight  font-medium whitespace-nowrap dark:text-black"
                                >
                                    {rute.nama_rute}
                                </td>

                                <td class="action">
                                    <Link
                                        href={`${rute.id}/detail`}
                                        className="bg-gray text-white px-2 py-1 rounded-md"
                                    >
                                        Cari Jadwal
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const noRute = () => {
    return <div>Saat ini belum ada berita tersedia</div>;
};

const ListRoute = ({ rutes }) => {
    return !rutes ? noRute() : isRute(rutes);
    // return !kapals  ? noRute() : isRute(kapals);
};

export default ListRoute;
