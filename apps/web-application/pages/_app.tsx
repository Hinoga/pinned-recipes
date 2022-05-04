import { AppProps } from 'next/app';
import { SpoonacularAPIContextProvider } from '@pinned-recipes/data-access-contexts';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pinned Recipes</title>
      </Head>
      <main className="app">
        <SpoonacularAPIContextProvider>
          <Component {...pageProps} />
        </SpoonacularAPIContextProvider>
      </main>
    </>
  );
}

export default CustomApp;
