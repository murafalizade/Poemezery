import React from 'react'
import { getSession, useSession } from 'next-auth/client';
import styles from '../styles/register.module.css'
import Link from 'next/link'
export default function SignIn() {
  return (
    <div>
      <form >
        <fieldset className={styles.forms}>
          <h4>Welcome !</h4>
          <Link href='#'> 
            <a className={styles.linkButton} >Continue Facebook</a>
          </Link>
          <Link href='#'>
             <a className={styles.linkButton} >Continue Twitter</a>
          </Link>
          <Link href='#'>
             <a className={styles.linkButton} >Continue Google</a>
          </Link>
          <Link href='/sign-in-email'>
             <a className={styles.linkButton} >Continue Email</a>
          </Link>
        </fieldset>
        <small className={styles.quote}>Don&apos;t have an account yet? 
          <Link href='/sign-up'>
             <a className='link'>Register now</a>
          </Link>
        </small>
      </form>
    </div>
  )
}


export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}