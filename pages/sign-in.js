import React from 'react'
import { getSession, useSession } from 'next-auth/client';
import styles from '../styles/register.module.css'
import Router from 'next/router';
export default function SignIn() {
    return (
        <div>
            <form >
                <fieldset className={styles.forms}>
                    <h4>Welcome !</h4>
                    <a className={styles.linkButton} href='#'>Continue Facebook</a>
                    <a className={styles.linkButton} href='#'>Continue Twitter</a>
                    <a className={styles.linkButton} href='#'>Continue Google</a>
                    <a className={styles.linkButton} href='/sign-in-email'>Continue Email</a>
                </fieldset>
                <small className={styles.quote}>Don&apos;t have an account yet? <a className='link' href='/sign-up'>Register now</a></small>
            </form>
        </div>
    )
}


export const getServerSideProps = async (ctx) =>{
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