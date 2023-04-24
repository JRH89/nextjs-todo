import Head from 'next/head'
import { Inter } from 'next/font/google'
import Login from '../components/login'

export default function Home() {
  return (
    <>
      <Head>
        <title>ToDo</title>
        <meta name="description" content="My todo list" />
        <link rel='icon' href="/favicon.ico/" />
      </Head>
      <Login />
      
    </>
  )
}
