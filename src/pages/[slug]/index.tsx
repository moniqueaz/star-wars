import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as S from './styles';
import { useCard } from 'service/hooks/card';
import Card from 'components/molecules/Card';

const Page: NextPage = () => {
  const router = useRouter();
  const slug = router?.query?.slug || '';
  const { data, error, isValidating } = useCard(slug, 1);

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
          <Card title={data?.title} list={data.list} image="https://via.placeholder.com/250"/>
        </S.Content>
      </S.Main>
    </>
  );
};

export default Page;
