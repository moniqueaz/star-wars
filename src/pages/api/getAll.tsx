import type { NextApiRequest, NextApiResponse } from 'next';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await fetcher('https://swapi.dev/api/');
  res.status(200).json(result);
};

export default getAll;
