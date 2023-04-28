//_app.js

import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          {/* you can add metadata here, for all pages */}
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp;