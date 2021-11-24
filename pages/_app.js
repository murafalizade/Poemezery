import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/Home.css'
import { useEffect, useState } from 'react';
import Layout from '../components/layout'
import { getSession, Provider } from 'next-auth/client';
import { wrapper } from '../Redux/reducer';
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      const session = await getSession();
      if (session !== null) {
        setAuth(true);
      }
      else {
        setAuth(false)
      }
    }
    authCheck();
  }, [])
  const router = useRouter();
  const officailPage = ['/welcome', '/about', '/contact-us']
  return (
    <Provider session={pageProps.session}>
      {!officailPage.includes(router.route) ? <Layout auth={auth}>
        <Component {...pageProps} />
      </Layout> : <Component {...pageProps} />}

    </Provider>

  )
}


export default wrapper.withRedux(MyApp);
