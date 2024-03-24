import React from "react";

export default function Pagination({ jadwals }) {
    const links = jadwals.links;
    const currentPage = jadwals.current_page;
    const lastPage = jadwals.last_page;
    
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {links.map((link, i) => {
                    return (
                        <li key={i}>
                            <a
                                href={link.url}
                                class={`flex items-center justify-center px-4 h-10 ms-0 leading-tight  ${
                                    link.active
                                        ? "bg-bermuda "
                                        : "bg-navy text-bermuda"
                                }  border border-e-0 border-gray  text-white  dark:hover:bg-gray ${
                                    i == 0 && "rounded-s-lg"
                                } ${i == links.length - 1 && "rounded-e-lg"} ${
                                    links.current
                                } ${i==0 && currentPage == 1 && "hidden"} ${currentPage == lastPage && i == links.length - 1 && "hidden"}`}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
