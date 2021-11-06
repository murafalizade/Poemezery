import React from 'react'

export default function SignInEmail() {
    return (
        <div>
        <form className='form'> 
            <h4>Welcome Poem World!</h4>
           <input className='form-control' placeholder='Email' type='email'/>
           <input className='form-control' placeholder='Password' type='password'/>
           <button className='btn btn-block btn-outline-success round' >Log in</button><br/>
           <small>Forget password?<a href='/'>Reset Password</a></small>
       </form>
   </div>
    )
}
