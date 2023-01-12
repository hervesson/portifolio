import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hervesson || Dev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
