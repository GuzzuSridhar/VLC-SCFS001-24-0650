import React from 'react'

const InlineStyles = () => {
    return (
        <>
            <div style={{ width: '50%', margin: 'auto' }}>
                {/* using the inline styles, remember to enclose style attributes in {{}} */}
                <h1 style={{ textAlign: 'center', color: 'white', backgroundColor: "red" }}>Working with Styles </h1>
            </div>

            <div style={{ color: "black", backgroundColor: "yellow" }}></div>
        </>
    )
}

export default InlineStyles