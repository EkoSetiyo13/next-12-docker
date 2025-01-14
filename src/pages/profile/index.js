'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Interceptor } from 'src/utils/env';
import styles from '../../../styles/Home.module.css'

export const dynamic = "force-dynamic";

export default function Profile() {
    const [intern, setIntern] = useState("")
    useEffect(() => { handleData() }, [])
    const handleData = async () => {
        const data = await Interceptor()
        console.log("data", data)
        setIntern(data?.env)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Profile </title>
            </Head>

            <main className={styles.main}>
                <h1>Profile Page : {process.env.NEXT_PUBLIC_API_URL} || {intern}</h1>
                <a href="/">Back to Home</a>
            </main>
        </div>
    )
}