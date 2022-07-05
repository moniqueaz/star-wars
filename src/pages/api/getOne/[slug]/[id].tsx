import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from 'utils/helpers';
import config from 'infra/config.json';

const getOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req?.query?.slug;
  const id = req?.query?.id;
  const result = await fetcher(`${config.api}/api/${slug}/${id}`);
  try {
    res.status(200).json(result);
  } catch (error) {
    console.info('error: ', error);
    res.status(500).json(result);
  }
};

export default getOne;
