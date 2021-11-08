import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PoemCard from '../../components/poemCard'
import Image from 'next/image'
export default function Authors() {
    return (
        <div>
            <Container>
                <Row>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <div>
                            <Image src='/default_avatar.png' width='100px' height='100px' />

                            </div>
                            <div>
                                <h4>Murad Aliyev</h4>
                                <p style={{color: '#9b9b9b'}}>llorElit laborum eu deserunt do. Laborum officia non tempor pariatur magna ut tempor labore eiusmod deserunt ullamco eiusmod. Duis pariatur ut labore officia minim laboris ad officia et consectetur officia. Ad occaecat reprehenderit tempor voluptate veniam. Anim laborum commodo ullamco mollit laboris irure magna culpa mollit voluptate incididunt esse ex. Dolore sit mollit ea aliqua sint id cillum aute nostrud cupidatat.orem</p>
                            </div>
                        </div>
                        <div>
                            <small style={{color: '#9b9b9b'}}>0 followers     0 following</small>
                            <button className='btn btn-outline-success rounded mx-3'>Follow</button>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={4}>
                        <PoemCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
