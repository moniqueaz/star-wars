import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from 'utils/helpers';

const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await fetcher('https://swapi.dev/api/');
  try {
    res.status(200).json(result);
  } catch (error) {
    console.info('error: ', error);
    res.status(500).json(result);
  }
};

export default getAll;
