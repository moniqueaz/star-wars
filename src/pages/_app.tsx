import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Template from 'components/templates';

function MyApp( { Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My Plannign</title>
        <link rel="shortcut icon" href="/img/icon-abacate-96.png" />
        <link rel="apple-touch-icon" href="/img/icon-abacate-96.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Um melhor controle da sua dieta" />
      </Head>
      <GlobalStyles />
      <Template>
        <Component {...pageProps} />
      </Template>
    </ThemeProvider>
  );
}

export default MyApp;
