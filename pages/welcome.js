import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from "next/dynamic";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Landingpage.module.css'
const Coursels = dynamic(() => import('../components/carousel'),{ ssr: false })

export default function Welcome() {
    return (
        <div className={styles.page}>
            <Head>
                <title>Welcome Poemezery!</title>
            </Head>
            <nav>
                <div className='navbar px-5 pt-3'>
                    <div>
                        <h3>Poemezery</h3>
                    </div>
                    <div className='d-flex'>
                        <Link href='/about'>About</Link>
                        <Link href='/contact-us'>Contact us</Link>
                        <button className='btn btn-outline-success h-30 rounded-pill'>Get Startted</button>
                    </div>
                </div>
            </nav>
            <section className={styles.firstSec}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className={styles.content}>
                                <h1>Reading book is fun & easier than ever.</h1>
                                <p>One glance at a book and you hear the voice of another person, perhaps this dead for 1,000 years. To read is to voyage through time.</p>
                                <button className={`btn btn-outline-success ${styles.startedBtn}   rounded-pill`}>Get Startted</button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Coursels />
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className={styles.miniSec}>
                <p className={styles.paragraphOfPage}>Talking book, happiness, lifestyle and everything that’s realted books.</p>
                <button className='btn'>Join us Telegram</button>
            </div>
            <section className={styles.secondSec}>
                <Container className='text-center'>
                    <Row style={{ justifyContent: 'center' }}>
                        <div className={styles.secondContent}>
                            <h1>Read unlimited books, the biggest online library.</h1>
                            <p>We know it can be really tough to read new books nowadays with our busy life. That’s the reason we’ve made booklov for you.</p>
                        </div>
                        <Col md={12}>

                            <Row>
                                <Col md={4}>
                                    <Image src={'/service-icon1.svg'} width='76px' height='80px' />
                                    <h5>Largest Collection of Books</h5>
                                </Col>
                                <Col md={4}>
                                    <Image src={'/service-icon2.svg'} width='76px' height='80px' />

                                    <h5>One Click Easy Subscription</h5>
                                </Col>
                                <Col md={4}>
                                    <Image src={'/service-icon3.svg'} width='76px' height='80px' />
                                    <h5>Unlimited Books, Anytime you want</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section>
                <Container>
                    <Row>
                        <h1>Categories of Poems</h1>
                        <p>Choose one of them and started reading poetry.</p>
                        <Col md={4}>
                            <div data-color='red' className={styles.catBox}>
                                <Link href='/poems'>
                                    <p className={styles.catBoxTitle} >Love &#8594;</p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}>
                                <Link href='/poems'>
                                    <p className={styles.catBoxTitle} >Happy  &#8594;</p></Link>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link href='/poems'>
                                <p className={styles.catBoxTitle} >Sad  &#8594;</p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link href='/poems'>
                                <p className={styles.catBoxTitle} >Country  &#8594;</p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link href='/poems'>
                                <p className={styles.catBoxTitle} >Depressive  &#8594;</p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link href='/poems'>
                                <p className={styles.catBoxTitle} >Mother  &#8594;</p></Link></div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section>
                <Container style={{marginTop:'120px'}}>
                    <Row>
                        <Col md={6}>
                            <div className={styles.wrapper}>
                                <div className={styles.cover}>
                                    <p >
                                        Shall I compare thee to a summer’s day?<br />
                                        Shall I compare thee to a summer’s day?<br/>
                                        Shall I compare thee to a summer’s day?<br/>
                                        Shall I compare thee to a summer’s day?<br/>
                                
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h1>Over one million books at your hand.</h1>
                            <p>One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.</p>
                        </Col>
                    </Row>
                </Container>
            </section>











            <section >
                <div className={styles.secMini}>

                    <div>
                        <div className={styles.firstImg}>
                            <Image src='/left-people.png' width='400px' height='360px' />
                        </div>
                        <div className={styles.secondImg}>
                            <Image src='/right-people.png' width='400px' height='360px' />
                        </div>
                        <div className={styles.thirdImg}>
                            <Image src='/net-shape-1.svg' width='1145px' height='200px' />
                        </div>
                    </div>
                    <Container>
                        <Row style={{ justifyContent: 'center', height: '0' }}>
                            <div style={{ position: 'relative', top: '-900px' }} className={styles.secondContent}>
                                <h1 style={{ textAlign: 'center' }}>Success Story</h1>
                                <p style={{ textAlign: 'center' }}>Have you ever made friends while reading books with Booklov? We would love to hear your story</p>
                                <button className='btn'>share your story</button>
                            </div>
                        </Row>


                    </Container>
                </div>
            </section>
            <div style={{ backgroundColor: '#f4fcff', height: '50vh' }} className={`text-center pt-5`}>
                <h1 style={{ textAlign: 'center' }}>Don't be shy, say hi!</h1>
                <p style={{ textAlign: 'center' }}>Talk about books, happiness, lifestyle and everything that’s realted books.</p>
                <button className={`btn btn-outline-success ${styles.startedBtn}   rounded-pill`}>Get started</button>
            </div>

            <footer className={styles.footer}>
                <ul>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact-us'>Contact us</a></li>
                    <li><a href='/privacy'>Privacy</a></li>
                    <li><a href='/tio'>Terms of services</a></li>
                    <li><a href='/'>Poems</a></li>
                </ul>
            </footer>
        </div>
    )
}