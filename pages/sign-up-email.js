import React from 'react'
import styles from '../styles/register.module.css'
export default function SignUpEmail() {
    return (
        <div>
             <form className={styles.forms}> 
                 <h4>Welcome Poem World!</h4>
                <input className={styles.formInput} placeholder='Email' type='email'/>
                <input className={styles.formInput} placeholder='Password' type='password'/>
                <input placeholder='Password Comfired' className={styles.formInput} type='password'/>
                <button className={styles.submitButton} >Get Started</button><br/>
            </form>
                <small className={styles.quote}>Already have an account?<a className='link' href='/sign-in'>Log in</a></small>
        </div>
    )
}
