import Head from 'next/head'
import { Inter } from 'next/font/google'
import Login from '../components/login'
import UserDashboard from '@/components/UserDashboard'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()
  return (
    <>
      <Head>
        <title>ToDo</title>
        <meta name="description" content="My todo list" />
        <link rel='icon' href="/favicon.ico/" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    </>
  )
}
