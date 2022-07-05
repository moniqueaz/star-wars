import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from './styles';
import { useCount } from 'service/hooks/count';
import RandomCard from 'components/organisms/RandomCard';
import { getRandomInteger } from 'utils/helpers';
import { useEffect, useState } from 'react';
import Loading from 'components/atoms/Loading';
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
    return <Loading size="large"/>;
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
          <RandomCard count={id} callback={updateId} slug={slug}/>
        </S.Content>
      </S.Main>
    </>
  );
};

export default Page;

