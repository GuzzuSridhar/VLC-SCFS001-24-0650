import React from 'react'

const Ternary = (props) => {
    const { salary } = props
    return (
        // use the ternary operator to conditionally render elements
        salary <= 1000 ?
            <p style={{ color: "#a34848" }}> Below Avg Salary </p>
            : salary > 1000 && salary <= 1999 ?
                <p style={{ color: "#e38d62" }}> Avg Salary </p>
                : <p style={{ color: "#3e8a50" }}>above Avg Salary </p>

    )
}

export default Ternary