import React from 'react'
import styles from '../styles/register.module.css'

export default function Register() {
    return (
        <div>
            <form>
                <fieldset className={styles.forms}>
                    <h4>Welcome !</h4>
                    <a  className={styles.linkButton} href='#'>Sign up Facebook</a>
                    <a className={styles.linkButton} href='#'>Sign up Twitter</a>
                    <a className={styles.linkButton} href='#'>Sign up Google</a>
                    <a className={styles.linkButton} href='/sign-up-email'>Sign up Email</a>
                </fieldset>
                <small className={styles.quote}>Already have an account?<a className='link' href='/sign-in'>Log in</a></small>
            </form>
        </div>
    )
}