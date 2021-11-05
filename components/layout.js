import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
export default function Layout({ children }) {
    const [auth, setAuth] = useState(false);
    return (
        <>
            <nav>
                <div className={styles.navbar}>
                    <h3>Poemezery</h3>
                    <input placeholder='Search ...' type='text' />
                    {!auth ? <div className={styles.form}>
                        <a href='/login' className={styles.btn}>Login</a>
                        <a href='/register' className={styles.btn}>Get Started</a>
                    </div> : <div>
                        <span>Profil</span>
                    </div>}
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}
