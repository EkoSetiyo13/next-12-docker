'use client'

import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>

            <main className={styles.main}>
                <h1>Home Page : {process.env.BASE_URL}</h1>
                <a href="/">Back to Home</a>
            </main>
        </div>
    )
}