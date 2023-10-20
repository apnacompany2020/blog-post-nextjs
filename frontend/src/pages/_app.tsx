import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Courier_Prime } from "next/font/google";
import Head from "next/head";
import { Container, SSRProvider } from "react-bootstrap";
import styles from "@/styles/App.module.css";
const courier = Courier_Prime({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vivek&apos;s DSA Guide</title>
        <meta name="description" content="Beautiful way to learn DSA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SSRProvider>
        <main className={courier.className}>
          <Container className={styles.container}>
            <Component {...pageProps} />
          </Container>
        </main>
      </SSRProvider>
    </>
  );
}
