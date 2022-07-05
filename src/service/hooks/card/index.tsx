import useSWR from 'swr';
import { fetcher } from 'utils/helpers';
import config from 'infra/config';

export const useCard = (slug: string | string[], id: number) => {
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
