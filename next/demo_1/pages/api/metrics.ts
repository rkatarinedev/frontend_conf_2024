import { NextApiRequest, NextApiResponse } from 'next'
import {register, collectDefaultMetrics} from "prom-client";

collectDefaultMetrics({
  prefix: 'next_',
})

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-type', register.contentType)
  res.send(await register.metrics())
}
