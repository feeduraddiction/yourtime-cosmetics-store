import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Button from '@UI/Button'
import styles from '../styles/Home.module.scss'
import Card from '@components/UI/Card'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>Hello</Button>
      <Card/>
    </div>
  )
}

export default Home
