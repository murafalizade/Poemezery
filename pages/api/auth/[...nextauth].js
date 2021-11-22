import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    authorize: async (credentials) => {
      const user = await axios.post('http://localhost:8080/api/v1/auth/register',
        {
            password: credentials.password,
            email: credentials.email
        },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
          }
        })
      if (user && user.status=='200') {
        return user
      } else {
        return null
      }
    }
  })
]

const callbacks = {
  async jwt(token, user) {
    if (user) {
      token.user = user.data.user
      token.accessToken = user.data.token
    }

    return token;
  },
  
  
  async session(session, token) {
    session.accessToken = token.accessToken
    session.user = token.user
    return session
  }


}

const options = {
  providers,
  callbacks,
  pages: {
    error: '/sign-up-email' // Changing the error redirect page to our custom login page
  }
}

export default (req, res) => NextAuth(req, res, options)