import React from 'react'
import styles from '../styles/register.module.css'
import { getSession } from 'next-auth/client'
import Link from 'next/link'
export default function Register() {
  return (
    <div>
      <form>
        <fieldset className={styles.forms}>
          <h4>Welcome !</h4>
          <Link href='#'>
            <a className={styles.linkButton} > Sign up Facebook </a>
          </Link>
          <Link href='#'>
            <a className={styles.linkButton} > Sign up Twitter </a>
          </Link>
          <Link href='#'>
            <a className={styles.linkButton} > Sign up Google </a>
          </Link>
          <Link href='/sign-up-email'>
            <a className={styles.linkButton} >Sign up Email </a>
          </Link>
        </fieldset>
        <small className={styles.quote}>Already have an account?
          <Link href='/sign-in'>
            <a className='link' > Log in </a>
          </Link></small>
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