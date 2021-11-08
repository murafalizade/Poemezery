import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { IoBookmarkOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from 'react-icons/io'
import Head from 'next/head'
import { Dropdown, DropdownButton } from 'react-bootstrap'
export default function Layout({ children }) {
    const [auth, setAuth] = useState(true)
    const [showDetails, setShowDetails] = useState(false)
    return (
        <>

            <Head>
                <title>Poemezery - Social media for poems</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <div className={styles.navbar}>
                    <h3><a href='/'>Poemezery</a></h3>
                    <input placeholder='Search ...' type='text' />
                    {!auth ? <div className={styles.form}>
                        <a href='/sign-in' className={styles.btn}>Login</a>
                        <a href='/sign-up' className={styles.btn}>Get Started</a>
                    </div> : <div className={styles.form}>
                        <div className={styles.icons}><IoIosNotificationsOutline size={'30px'} />
                            <DropdownButton title="Dropdown button">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                            <div style={{ display: 'none' }} className={styles.secretSection}>
                                <p> Not new notifications yet</p>
                            </div>
                        </div>
                        <div className={styles.icons}><a href='/bookmarks' ><IoBookmarkOutline size={'30px'} /></a></div>
                        <div>
                            <Image onMouseDown={() => setShowDetails(!showDetails)} src='/default_avatar.png' width='40px' height='40px' alt='avatar_image' />
                            <div style={showDetails ? { display: 'block' } : { display: 'none' }} className={styles.secretSection}>
                                <ul>
                                    <li><a href='/my-poems'>Poems</a></li>
                                    <li><a href='/write-poem'>Write Poems</a></li>
                                </ul>
                                <ul>
                                    <li><a href='/my-app'>Profile</a></li>
                                    <li><a href='/settings'>Settings</a></li>
                                    <li><a href='#'>Log out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>}
                </div>
            </nav>
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                <ul>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact-us'>Contact us</a></li>
                    <li><a href='/privacy'>Privacy</a></li>
                    <li><a href='/tio'>Terms of services</a></li>
                    <li><a href='/'>Poems</a></li>
                </ul>
            </footer>
        </>
    )
}
