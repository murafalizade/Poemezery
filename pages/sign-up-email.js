import React from 'react'
export default function SignUpEmail() {
    return (
        <div>
             <form className='form'> 
                 <h4>Welcome Poem World!</h4>
                <input className='form-control' placeholder='Email' type='email'/>
                <input className='form-control' placeholder='Password' type='password'/>
                <input placeholder='Password Comfired' className='form-control' type='password'/>
                <button className='btn btn-block btn-outline-success round' >Get Started</button><br/>
                <small>Already have an account?<a href='/sign-in'>Log in</a></small>
            </form>
        </div>
    )
}
