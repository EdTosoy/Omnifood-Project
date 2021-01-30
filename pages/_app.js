import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />;
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
