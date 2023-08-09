import { NextApiRequest, NextApiResponse } from 'next';

import { allFoodsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const query = allFoodsQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const doc = req.body;

    client.create(doc).then(() => {
      res.status(200).json('Done');
    });
  }
}