import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Simple Next.js Site</title>
        <meta name="description" content="A simple Next.js website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Next.js website!
        </h1>

        <p className={styles.description}>
          This is a simple, working Next.js site.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Created with Next.js</p>
      </footer>
    </div>
  )
}