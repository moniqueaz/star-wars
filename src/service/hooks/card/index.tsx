import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from 'utils/helpers';
import config from 'infra/config';

export const useCard = (id: number) => {
  const router = useRouter();
  const slug = router?.query?.slug || '';
  const { data, error, isValidating } = useSWR(
      `${config.getOne}/${slug}/${id}`,
      fetcher,
  );

  const excludedList = ['name', 'homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited', 'url', 'residents', 'characters', 'planets', 'opening_crawl', 'people'];
  const list = data ? Object.keys(data).filter(item => !excludedList.includes(item)) : [];

  const props = {
    title: data?.name,
    card: list.reduce((initial, item) => ( { ...initial, [item]: data[item] } ), {} ),
  };

  return { data: props, error, isValidating };
};
