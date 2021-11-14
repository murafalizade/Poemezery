import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PoemCard from '../components/poemCard'

export default function Bookmarks() {
    const [poem, setPoems] = useState();
    return (
        <div>
            <Container>
                <h3 style={{ textAlign: 'left' }}>Bookmarks</h3>
                <Row>
                    {poem ? poem.map((pm) => (
                    <Col key={pm.id} md={4}>
                        <PoemCard poem={pm} />
                    </Col>)) : <p>You don't have any Bookmarks</p>}

                </Row>
            </Container>
        </div>
    )
}
