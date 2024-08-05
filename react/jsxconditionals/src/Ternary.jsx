import React from 'react'

const Ternary = (props) => {
    const { salary } = props
    return (
        // use the ternary operator to conditionally render elements
        salary <= 1000 ?
            <p style={{ color: "#a34848" }}> A salary of {salary} is Below Avg  </p>
            : salary > 1000 && salary <= 1999 ?
                <p style={{ color: "#e38d62" }}> A salary of {salary} is Avg</p>
                : <p style={{ color: "#3e8a50" }}>A salary of {salary} is Above Avg</p>

    )
}
export default Ternary