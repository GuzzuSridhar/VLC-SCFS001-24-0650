import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import img1 from '../../src/images/th1.jpeg'
import img2 from '../../src/images/th14.jpeg'
import img3 from '../../src/images/gr1.jpeg'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <Container className='text-center'>
                <Row>
                    <Col>
                        <h1>Welcome to My Store</h1>
                        <h2>Best Deals</h2>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Travel Essentials</Card.Title>
                                <Card.Text>
                                    Bags an More
                                </Card.Text>
                                <Button variant="primary">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Mobiles</Card.Title>
                                <Card.Text>
                                    Mobiles and Accessories
                                </Card.Text>
                                <Button variant="primary">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Grocery</Card.Title>
                                <Card.Text>
                                    Fresh daily Essentials
                                </Card.Text>
                                <Button variant="primary">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HomePage