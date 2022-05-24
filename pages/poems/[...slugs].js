import axios from "axios"
import { Container, Row, Col } from "react-bootstrap";
import PoemCard from "../../components/poemCard";

function Poem({ somePoem }) {
    console.log(somePoem)
    return (
        <Container>
            {
                !somePoem ? (<p>We find only <b>{somePoem.length} poems</b></p>) :
                    <>
                        <p>We find only <b>{somePoem.length} poems</b></p>
                        <Row>
                            {somePoem.map(poem => (
                                <Col md={4} key={poem.id}>
                                    <PoemCard poem={poem} />
                                </Col>
                            ))}
                        </Row>

                    </>
            }
        </Container>
    )
}

export async function getServerSideProps({ query }) {
    const allPoem = await axios.get('http://localhost:8080/api/v1/poems');
    const somePoem = allPoem?.data.filter(poem => poem.tags.some(tg => tg.id === query.tag))
    return {
        props: { somePoem }
    }
}
export default Poem;