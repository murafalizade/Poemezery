import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PoemCard from '../../components/poemCard'
import Image from 'next/image'
import axios from 'axios';
export default function Authors({ user }) {
    return (
        <div>
            <Container>
                <Row>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <div>
                                <Image src={user.imgUrl} alt={`${`${user.penName} avatar`.replace(" ","_")}`} width='100px' height='100px' />

                            </div>
                            <div>
                                <h4>{user.penName}</h4>
                                <p style={{ color: '#9b9b9b' }}>{user.description}</p>
                            </div>
                        </div>
                        <div>
                            <small style={{ color: '#9b9b9b' }}>{user.followers.length} followers     {user.following.length} following</small>
                            <button className='btn btn-outline-success rounded mx-3'>Follow</button>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={4}>
                        {user.poems.length === 0 ? (<p style={{textAlign:'center',fontSize:'20px',marginLeft:'100%',marginTop:'30%'}}>Not any poet</p>) : user.poems.map((poem) => (<PoemCard key={poem.id} poem={poem} />))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await axios.get('http://localhost:8080/api/v1/authors')
    const users = res.data;

    // Get the paths we want to pre-render based on posts
    const paths = users.map((user) => ({
        params: { author: user.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await axios.get(`http://localhost:8080/api/v1/authors/${params.author}`)
    const user = res.data;
    // Pass post data to the page via props
    return { props: { user } }
}
