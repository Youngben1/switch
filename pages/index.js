import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Switch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Layout />
      
    </div>
  )
}
