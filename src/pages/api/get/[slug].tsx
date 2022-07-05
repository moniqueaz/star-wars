import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from 'utils/helpers';
import config from 'infra/config';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req?.query?.slug;
  const result = await fetcher(`${config.api}/${slug}`);
  try {
    res.status(200).json(result);
  } catch (error) {
    console.info('error: ', error);
    res.status(500).json(result);
  }
};

export default get;
