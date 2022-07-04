import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils/helpers';
const Home: NextPage = () => {
  const { data, error, isValidating } = useSWR(
      '/api/getAll',
      fetcher,
  );

  if (!!error) {
    return <div>Error</div>;
  }

  if (isValidating) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Star Wars Card Game</title>
        <meta name="description" content="Star Wars Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <S.Nav>
          {
            Object.keys(data).map(item => (
              <S.Item key={item}>
                <S.Link href={`/${item}`}>{item}</S.Link>
              </S.Item>
            ))
          }
        </S.Nav>
      </S.Main>
    </>
  );
};

export default Home;
