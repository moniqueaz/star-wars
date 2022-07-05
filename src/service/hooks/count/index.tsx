import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher, getRandomInteger } from 'utils/helpers';
import config from 'infra/config';

export const useCount= () => {
  const router = useRouter();
  const slug = router?.query?.slug || '';
  const { data } = useSWR(
      `${config.get}/${slug}`,
      fetcher,
  );

  const count = data?.count || 0;
  const number = getRandomInteger(0, count);

  return number;
};

