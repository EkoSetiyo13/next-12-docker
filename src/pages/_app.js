import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('Environment Variables:', {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    // tambahkan env lain yang ingin dicek
  });
  return <Component {...pageProps} />
}

export default MyApp
