import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from './styles';
import { useCount } from 'service/hooks/count';
import SortCard from 'components/organisms/SortCard';

const Page: NextPage = () => {
  const count = useCount();

  return (
    <>
      <Head>
        <title>Star Wars Card Game</title>
        <meta name="description" content="Star Wars Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <S.Content>
          <SortCard count={count}/>
        </S.Content>
      </S.Main>
    </>
  );
};

export default Page;
