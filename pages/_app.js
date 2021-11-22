import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import '../styles/Home.css'
import { useEffect, useState } from 'react';
import Layout from '../components/layout'
import { getSession, Provider, useSession } from 'next-auth/client';
function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      const session = await getSession();
      console.log(session, 'session data')
      if (session !== null) {
        setAuth(true);
      }
      else {
        setAuth(false)
      }
    }
    authCheck();
    console.log(auth)
  }, [])
  return (
    <Provider session={pageProps.session}>
      <Layout auth={auth}>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}


export default MyApp
