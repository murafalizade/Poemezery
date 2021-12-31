import React,{useState} from 'react'
import styles from '../styles/register.module.css'
import Link from 'next/link'
import { signIn } from 'next-auth/client'
export default function SignInEmail() {
    const [user,setUser] = useState({email:'',password:''})
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user)
        signIn('login',
                {
                    email: user.email,
                    password: user.password,
                    callbackUrl: `/`
                }
            )
    }
    return (
        <div>
        <form className={styles.forms}> 
            <h4>Welcome Poem World!</h4>
           <input onChange={(e)=>setUser({...user,email:e.target.value})} className={styles.formInput} placeholder='Email' type='email'/>
           <input onChange={(e)=>setUser({...user,password:e.target.value})}  className={styles.formInput} placeholder='Password' type='password'/>
           <button onClick={(e)=>handleSubmit(e)} className={styles.submitButton} >Log in</button><br/>
       </form>
       <small className={styles.quote}>Forget password?<Link href='/'><a  className='link' >Reset Password</a></Link></small>

   </div>
    )
}
