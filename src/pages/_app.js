import { useEffect } from 'react';
import { getConfig } from 'src/utils/config';
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log('Environment Variables:', {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    }); 
    getConfig();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
