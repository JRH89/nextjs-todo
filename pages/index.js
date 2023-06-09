import Head from 'next/head'
import Login from '../components/login'
import UserDashboard from '@/components/UserDashboard'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://nextjs-todo-rose.vercel.app" />
        <meta property="og:title" content="ToDo" />
        <meta property="og:description" content="A simple ToDo app made with NextJS, TailwindCSS, and Firebase" />
        <meta property="og:image" content="cover-todo.png" />
        <meta property="url" content="https://nextjs-todo-rose.vercel.app" />
        <meta property="title" content="ToDo" />
        <meta property="description" content="A simple ToDo app made with NextJS, TailwindCSS, and Firebase" />
        <meta property="image" content="cover-todo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,800;0,900;1,200&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="shortcut icon" type="image/png" href="HookerHill.png" />
        <title>Get-It-Done</title>
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    </>
  )
}
