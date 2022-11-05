import { NextApiRequest, NextApiResponse } from 'next';
const axios = require('axios');

export const URL = 'https://stress-alert.ew.r.appspot.com';

const instance = axios.create({
  baseURL: URL,
  timeout: 5000
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await instance.get('/stress-values');
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
}
