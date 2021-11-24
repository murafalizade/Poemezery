import React, { useState } from 'react'
import styles from '../styles/register.module.css'
import { signIn } from 'next-auth/client'
export default function SignUpEmail() {
    const [user, setUser] = useState({ email: '', password: '', comfirPassword: '' });
    const handleLogin = (e) => {
        e.preventDefault();
        if (user.comfirPassword === user.password) {
            signIn('credentials',
                {
                    email: user.email,
                    password: user.password,
                    callbackUrl: `/`
                }
            )
        }

    }

    return (
        <div>
            <form className={styles.forms}>
                <h4>Welcome Poem World!</h4>
                <input className={styles.formInput}
                    value={user.email}
                    placeholder='Email'
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    type='email' required />
                <input
                    className={styles.formInput}
                    value={user.password}
                    placeholder='Password'
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    type='password' required />
                <input
                    placeholder='Password Comfired'
                    value={user.comfirPassword}
                    className={styles.formInput}
                    onChange={(e) => setUser({ ...user, comfirPassword: e.target.value })}
                    type='password' required />
                <button onClick={(e) => handleLogin(e)} className={styles.submitButton} >Get Started</button><br />
            </form>
            <small className={styles.quote}>Already have an account?<a className='link' href='/sign-in'>Log in</a></small>
        </div>
    )
}
