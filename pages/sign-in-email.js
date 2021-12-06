import React from 'react'
import styles from '../styles/register.module.css'
import Link from 'next/link'
export default function SignInEmail() {
    return (
        <div>
        <form className={styles.forms}> 
            <h4>Welcome Poem World!</h4>
           <input className={styles.formInput} placeholder='Email' type='email'/>
           <input className={styles.formInput} placeholder='Password' type='password'/>
           <button className={styles.submitButton} >Log in</button><br/>
       </form>
       <small className={styles.quote}>Forget password?<Link href='/'><a  className='link' >Reset Password</a></Link></small>

   </div>
    )
}
