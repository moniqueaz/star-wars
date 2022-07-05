import useSWR from 'swr';
import { fetcher, getRandomInteger } from 'utils/helpers';

export const useCount= (slug: string | string[]) => {
  const { data } = useSWR(
      `/api/get/${slug}`,
      fetcher,
  );

  const count = data?.count || 0;
  const number = getRandomInteger(0, count);

  return number;
};

