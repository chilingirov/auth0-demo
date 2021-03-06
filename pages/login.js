import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Login() {
    const { user } = useUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <h3>This is a route for logging in!</h3>
          <Link href="/api/auth/login"><a>Login</a></Link>
        </div>
    </div>
  )
}


