import { Link, router } from "@inertiajs/react";

const isRute = (rutes) => {
    return (
        <div>
        <div className="flex items-center justify-start mt-10 mx-4 sm:mx-10 text-midnight font-serif">
            Informasi Jadwal
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-4 sm:mx-10 pb-5">
            <table className="min-w-full text-center">
                <thead className="text-xs text-white uppercase bg-gray font-bold">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Rute
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-silver text-center">
                    {rutes.map((rute) => (
                        <tr key={rute.id} className="hover:bg-gray-100">
                            <td className="px-4 py-4 text-midnight text-sm font-medium whitespace-nowrap">
                                {rute.id}
                            </td>
                            <td className="px-4 py-4 text-midnight text-sm font-medium whitespace-nowrap">
                                {rute.nama_rute}
                            </td>
                            <td className="px-4 py-4">
                                <Link
                                    href={`${rute.id}/detail`}
                                    className="bg-gray text-sm text-white px-3 py-1 rounded-md"
                                >
                                    Cari 
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
