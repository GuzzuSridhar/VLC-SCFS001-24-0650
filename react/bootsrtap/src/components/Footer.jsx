import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='footer'>
            <footer >
                <Container className=' bg-primary'>
                    <span> &copy; 2024, My Store. All Rights Reserved </span>
                </Container>
            </footer>
        </div>
    )
}

export default Footer