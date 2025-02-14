import 'aos/dist/aos.css';
import '../styles/globals.scss'
import Head from "next/head";

import useWindowSize from "../hooks/useWindowDimensions";
import {useEffect} from "react";

import AOS from "aos";

function App({ Component, pageProps }) {
  const { height, width } = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth",
      once: true,
      mirror: true
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />

        <title>Eighty6 - Coming Soon</title>
        <meta name="title" content="Eighty6 - Coming Soon" />
        <meta name="description" content="Eighty6 is Coming Soon." />
        <meta name="keywords" content="Eighty6, Esports, RL, Rocket League, Professional Esports Team" />

        <meta property="og:site_name" content="Eighty6" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eighty6.gg/" />
        <meta property="og:title" content="Eighty6 is Coming Soon." />
        <meta property="og:description" content="ighty6 is Coming Soon." />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eighty6.gg/" />
        <meta property="twitter:title" content="Eighty6 is Coming Soon." />
        <meta property="twitter:description" content="Eighty6 is Coming Soon." />
        <meta property="twitter:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
