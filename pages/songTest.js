import Head from 'next/head'
import SongPage from '../components/SongPage'
export default function Song() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SongPage/>
    </>
  )
}
