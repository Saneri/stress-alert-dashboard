import { NextApiRequest, NextApiResponse } from 'next';
const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://stress-alert.ew.r.appspot.com',
  timeout: 5000
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await instance.get('/stress-values');
    res.send(data);
  } catch ({ message }) {
    res.status(500).send(message);
  }
}
