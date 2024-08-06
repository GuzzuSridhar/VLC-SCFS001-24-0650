import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <div>
            <h1>AboutUs</h1>
            <Link to="/contact">Contact Us</Link>
            <br />
            <Link to="/home">Home</Link>
        </div>
    )
}

export default AboutUs