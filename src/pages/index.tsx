import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from './styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Star Wars Card Game</title>
        <meta name="description" content="Star Wars Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <S.Nav>
          <S.Link href="/people">People</S.Link>
        </S.Nav>
      </S.Main>
    </>
  );
};

export default Home;
