import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Popular from '../components/Popular'
import Value from '../components/Value'
import Contact from '../components/Contact'
import Subscribe from '../components/Subscribe'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real State Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Logos />
      <Popular />
      <Value />
      <Contact />
      <Subscribe />
    </>
  )
}

export default Home
