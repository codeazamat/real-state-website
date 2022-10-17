import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import 'swiper/css'
import 'swiper/css/pagination'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
