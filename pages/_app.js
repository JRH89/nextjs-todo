import Layout from '@/components/layout'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  ) 
}
