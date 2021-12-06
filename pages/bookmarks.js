import axios from 'axios';
import { getSession } from 'next-auth/client';
import { Col, Container, Row } from 'react-bootstrap'
import PoemCard from '../components/poemCard'
import Link from 'next/dist/client/link';
export default function Bookmarks({ bookMarks, session }) {
    return (
        <div>
            <Container>
                {session ? (
                    <><h3 style={{ textAlign: 'left' }}>Bookmarks</h3>
                        <Row>
                            {bookMarks!==[] ? bookMarks.map((pm) => (
                                <Col key={pm.id} md={4}>
                                    <PoemCard poem={pm} />
                                </Col>)) : <p>You don&apos;t have any Bookmarks</p>}
                        </Row>
                    </>
                ) : <h3>Please <Link href='/sign-in'>Login</Link></h3>}
            </Container>
        </div>
    )
}


export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    const myProfile = await axios.get(`http://localhost:8080/api/v1/my-profile/`,{headers:{'Header-Token':session?.accessToken}});
    console.log(myProfile)
    const bookMarks = myProfile.data.bookMarks;
    return {
        props: {
            bookMarks,
            session
        }
    }
}