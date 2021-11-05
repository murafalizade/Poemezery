import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import '../styles/Home.css'

import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
