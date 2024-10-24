import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export default function Profile() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Profile</title>
            </Head>

            <main className={styles.main}>
                <h1>Profile Page</h1>
                <a href="/">Back to Home</a>
            </main>
        </div>
    )
}