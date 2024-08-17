import React from "react";

function JSONToTable({ items }) {

    const columns = items.length > 0 ? Object.keys(items[0]) : [];
    return (
        <>
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
                            {items.map((item) => (
                                <tr key={item.id}>
                                    {columns.map((col) => (
                                        <td key={col}>
                                            {item[col]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </>
    )
}


export default JSONToTable