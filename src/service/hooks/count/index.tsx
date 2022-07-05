import useSWR from 'swr';
import { fetcher } from 'utils/helpers';
import config from 'infra/config';

export const useCount = (slug: string | string[]) => {
  const { data, isValidating, error } = useSWR(
      `${config.get}/${slug}`,
      fetcher,
  );
  const count = data?.count || 0;
  return { count, isValidating, error };
};

