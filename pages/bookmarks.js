import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PoemCard from '../components/poemCard'

export default function Bookmarks() {
    return (
        <div>
            <Container>
                <h3 style={{textAlign:'left'}}>Bookmarks</h3>
                <Row>
                    <Col md={4}>
                        <PoemCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
