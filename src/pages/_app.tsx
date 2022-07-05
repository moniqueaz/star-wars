import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Template from 'components/templates';
import { useRouter } from 'next/router';
function MyApp( { Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Star Wars Card Game</title>
        <link rel="shortcut icon" href="/img/icon-96.png" />
        <link rel="apple-touch-icon" href="/img/icon-96.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Star Wars Card Game" />
      </Head>
      <GlobalStyles />
      <Template>
        <Component {...pageProps} router={router} />
      </Template>
    </ThemeProvider>
  );
}

export default MyApp;
