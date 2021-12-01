import React,{useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PoemCard from '../../components/poemCard'
import Image from 'next/image'
import axios from 'axios';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
export default function Authors({ author }) {
    const router = useRouter();
    const [session] = useSession();
    const [follow,setFollow] = useState(false);
    const [fakeFlwCount,setFakeFlwCount] = useState(author.followers.length);
    useEffect(()=>{
        const trye = () =>{
            const flwProof = author.followers.some((flw)=>flw.name===session?.user.name)
            setFollow(flwProof)
        }
        trye();
    },[session])
    const followProfile = async () => {

        if (!session) return router.push('/sign-in');
        const confug = { headers: { 'Header-Token': session.accessToken } }
        const data = await axios.put(`http://localhost:8080/api/v1/author/${author.id}/follow`,{name:'a'},confug)
        if(data.status!='200'){
            console.log(data)
            return router.push('/');
        }
        setFollow(true)
        setFakeFlwCount(fakeFlwCount+1);
    }

    return (
        <div>
            <Container>
                <Row>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <div>
                                <Image src={author.imgUrl} alt={`${`${author.penName} avatar`.replace(" ","_")}`} width='100px' height='100px' />

                            </div>
                            <div>
                                <h4>{author.penName}</h4>
                                <p style={{ color: '#9b9b9b' }}>{author.description}</p>
                            </div>
                        </div>
                        <div>
                            <small style={{ color: '#9b9b9b' }}>{fakeFlwCount} followers     {author.following.length} following</small>
                            <button onClick={()=>followProfile()} className={`btn ${follow?'btn-success':'btn-outline-success'} rounded mx-3`}>{follow?'Following':'Follow'}</button>
                        </div>
                    </div>
                </Row>
                <Row>
                        {author.poems.length === 0 ? (<p style={{textAlign:'center',fontSize:'20px',marginLeft:'100%',marginTop:'30%'}}>Not any poet</p>) : author.poems.map((poem) => (
                        <Col  key={poem._id} md={4}>
                            <PoemCard  poem={poem} />
                            </Col>))}
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
    const author = res.data;

    // Pass post data to the page via props
    return { props: { author } }
}


