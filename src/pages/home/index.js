'use client'

import Head from 'next/head'
import { getRuntimeConfig } from 'src/config/runtime-config'
import styles from '../../../styles/Home.module.css'

export default function Home() {
    const config = getRuntimeConfig()
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>

            <main className={styles.main}>
                <h1>Home Page : {process.env.NEXT_PUBLIC_API_URL}</h1>
                <h1>getRuntimeConfig : {config.apiUrl}</h1>

                <a href="/">Back to Home</a>
            </main>
        </div>
    )
}