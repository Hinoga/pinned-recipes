import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import GlobalProviders from 'libs/data-access/contexts/src/lib/GlobalProvider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pinned Recipes</title>
      </Head>
      <main className="app">
        <GlobalProviders>
          <Component {...pageProps} />
        </GlobalProviders>
      </main>
    </>
  );
}

export default CustomApp;
