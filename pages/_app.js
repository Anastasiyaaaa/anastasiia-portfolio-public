import '../styles/globals.css'
import Layout from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Anastasiia` portfolio</title>
        <meta name="description" content="Anastasiia` introduction" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
