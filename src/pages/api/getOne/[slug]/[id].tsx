import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from 'utils/helpers';
import config from 'infra/config';

const getOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req?.query?.slug;
  const id = req?.query?.id;
  const result = await fetcher(`${config.api}/${slug}/${id}`);
  try {
    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).json(result);
  } catch (error) {
    console.info('error: ', error);
    res.status(500).json(result);
  }
};

export default getOne;
