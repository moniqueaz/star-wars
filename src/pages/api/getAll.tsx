import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from 'utils/helpers';
import config from 'infra/config';

const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await fetcher(`${config.api}`);
  try {
    res.status(200).json(result);
  } catch (error) {
    console.error('error: ', error);
    res.status(500).json(result);
  }
};

export default getAll;
