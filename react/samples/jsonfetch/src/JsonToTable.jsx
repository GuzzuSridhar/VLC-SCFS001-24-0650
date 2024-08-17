import React, { useState } from "react";

function JSONToTable({ items }) {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page

    // Calculate the current items to be displayed
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const columns = items.length > 0 ? Object.keys(items[0]) : [];
    return (
        <>
            <div className="centercontent">
                {
                    items.length > 0 && (
                        <table>
                            <thead>
                                <tr>
                                    {columns.map((col) => (
                                        <th key={col}>{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item) => (
                                    <tr key={item.id}>
                                        {columns.map((col) => (
                                            <td key={col}>
                                                {typeof item[col] === "object" && item[col] !== null ? (
                                                    Array.isArray(item[col]) ? (
                                                        <JSONToTable items={item[col]} />
                                                    ) : (
                                                        <JSONToTable items={[item[col]]} />
                                                    )
                                                ) : (
                                                    item[col]
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    )
                }
            </div>
            <div>
                <button className="navbutton"
                    onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button className="navbutton"
                    onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    )
}


export default JSONToTable