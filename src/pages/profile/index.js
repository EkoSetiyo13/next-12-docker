'use client'

import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export const dynamic = "force-dynamic";

export default function Profile() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Profile</title>
            </Head>

            <main className={styles.main}>
                <h1>Profile Page : {process.env.NEXT_PUBLIC_API_URL}</h1>
                <a href="/">Back to Home</a>
            </main>
        </div>
    )
}