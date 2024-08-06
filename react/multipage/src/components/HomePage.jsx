import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/contact">Contact Us</Link>
            <br />
            <Link to="/about">About Us</Link>

        </div>
    )
}

export default HomePage