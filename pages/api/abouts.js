import { NextApiRequest, NextApiResponse } from 'next';

import { aboutsQuery } from './../../utils/queries';
import { client } from '../../utils/client';

export default async function handler(req, res) {
  if(req.method === 'GET') {
  const data = await client.fetch(aboutsQuery());
  
  if(data) {
    res.status(200).json(data);
  } else {
    res.json([]);
  }
 }
}