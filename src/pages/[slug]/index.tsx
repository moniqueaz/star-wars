import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from './styles';
import { useCount } from 'service/hooks/count';
import SortCard from 'components/organisms/SortCard';
import { getRandomInteger } from 'utils/helpers';
import { useEffect, useState } from 'react';

const Page: NextPage = ( { router } ) => {
  const [id, setId] = useState(0);
  const slug = router?.query?.slug || '';

  const { count, isValidating, error } = useCount(slug);

  useEffect(() => {
    if (!!count) {
      setId(getRandomInteger(0, count));
    }
  }, [count]);

  const updateId = () => {
    setId(getRandomInteger(0, count));
  };

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
        <S.Content>
          <SortCard count={id} callback={updateId} slug={slug}/>
        </S.Content>
      </S.Main>
    </>
  );
};

export default Page;

