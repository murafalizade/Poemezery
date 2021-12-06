import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from "next/dynamic";
import { Col, Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/dist/client/router';
import styles from '../styles/Landingpage.module.css'
const Coursels = dynamic(() => import('../components/carousel'), { ssr: false })


export default function Welcome() {
    const router = useRouter()
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
                    <div className={styles.navbr}>
                        <Link href='/about'>About</Link>
                        <Link href='/contact-us'>Contact us</Link>
                        <button onClick={()=>router.push('/sign-up')} className='btn btn-outline-success h-30 rounded-pill'>Get Startted</button>
                    </div>
                </div>
            </nav>
            <section className={styles.firstSec}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className={styles.content}>
                                <h1>Writing poem is fun & easier than ever.</h1>
                                <p>One glance at a poem and you hear the music of poem, perhaps this dead for 1,000 years. To read is to voyage through time.</p>
                                <button onClick={()=>router.push('/sign-up')} className={`btn btn-outline-success ${styles.startedBtn}  ${styles.slideInLeft}  rounded-pill`}>Get Startted</button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Coursels />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container fluid>
                <Row>
            <div className={styles.miniSec}>
                <p className={styles.paragraphOfPage}>Telling poem, happiness, lifestyle and everything that’s realted poems.</p>
                <button className='btn'>Join us Telegram</button>
            </div>
            </Row>
            </Container>
            <section className={styles.secondSec}>
                <Container className='text-center'>
                    <Row style={{ justifyContent: 'center' }}>
                        <div className={styles.secondContent}>
                            <h1>Read unlimited poems, the biggest online library.</h1>
                            <p>We know it can be really tough to read new poems nowadays with our busy life. That’s the reason we’ve made poemezery for you.</p>
                        </div>
                        <Col md={12}>

                            <Row>
                                <Col md={4}>
                                    <Image src={'/service-icon1.svg'} alt='service-icon-1' width='76px' height='80px' />
                                    <h5>Largest Collection of Poems</h5>
                                </Col>
                                <Col md={4}>
                                    <Image src={'/service-icon2.svg'}  alt='service-icon-2' width='76px' height='80px' />

                                    <h5>One Click Easy Subscription</h5>
                                </Col>
                                <Col md={4}>
                                    <Image src={'/service-icon3.svg'}  alt='service-icon-3' width='76px' height='80px' />
                                    <h5>Unlimited Poems, Anytime you want</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className='pt-5 mt-5'>
                <Container>
                    <Row>
                        <h1>Categories of Poems</h1>
                        <p>Choose one of them and started reading poetry.</p>
                        <Col md={4}>
                            <div data-color='red' className={styles.catBox}>
                                <Link passHref={true} href='/'>
                                    <p className={styles.catBoxTitle} >Blank verse</p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}>
                                <Link passHref={true} href='/'>
                                    <p className={styles.catBoxTitle} >Rhymed poetry</p></Link>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link passHref={true} href='/'>
                                <p className={styles.catBoxTitle} >Free verse</p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link passHref={true} href='/'>
                                <p className={styles.catBoxTitle} >Epics </p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link passHref={true} href='/'>
                                <p className={styles.catBoxTitle} >Narrative poetry</p></Link></div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.catBox}> <Link passHref={true} href='/'>
                                <p className={styles.catBoxTitle} >Haiku</p></Link></div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section>
                <Container style={{ marginTop: '120px' }}>
                    <Row>
                        <Col md={6}>
                            <div className={styles.wrapper}>
                                <Image src="/poemExample.png"
                                    style={{ border: '1px solid black' }} width='330px' height='430px' alt="poem-example" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <h1>Over one million poems at your hand.</h1>
                            <p>One glance at a poem and you hear the music of poem, perhaps this dead for 1,000 years. To read is to voyage through time.</p>
                        </Col>
                    </Row>
                </Container>
            </section>











            <section >
                <div className={styles.secMini}>

                    <div>
                        <div className={styles.firstImg}>
                            <Image src='/left-people.png' alt='people-circle-left' width='400px' height='360px' />
                        </div>
                        <div className={styles.secondImg}>
                            <Image src='/right-people.png' alt='people-circle-right' width='400px' height='360px' />
                        </div>
                        <div className={styles.thirdImg}>
                            <Image src='/net-shape-1.svg' alt='shape-pattern' width='1145px' height='200px' />
                        </div>
                    </div>
                    <Container>
                        <Row style={{ justifyContent: 'center', height: '0' }}>
                            <div style={{ position: 'relative', top: '-900px' }} className={styles.secondContent}>
                                <h1 style={{ textAlign: 'center' }}>Success Story</h1>
                                <p style={{ textAlign: 'center' }}>Have you ever made friends while reading poem with Poemezery? We would love to hear your story</p>
                                <button className='btn'>share your story</button>
                            </div>
                        </Row>


                    </Container>
                </div>
            </section>
            <div style={{ backgroundColor: '#f4fcff', height: '50vh' }} className={`text-center pt-5`}>
                <h1 style={{ textAlign: 'center' }}>Don&apos;t be shy, say hi!</h1>
                <p style={{ textAlign: 'center' }}>Telling about poems, happiness, lifestyle and everything that’s realted poems.</p>
                <button onClick={()=>router.push('/sign-up')} className={`btn btn-outline-success ${styles.startedBtn}   rounded-pill`}>Get started</button>
            </div>

            <footer className={styles.footer}>
                <ul>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact-us'>Contact us</Link></li>
                    <li><Link href='/privacy'>Privacy</Link></li>
                    <li><Link href='/tio'>Terms of services</Link></li>
                    <li><Link href='/'>Poems</Link></li>
                </ul>
            </footer>
        </div>
    )
}