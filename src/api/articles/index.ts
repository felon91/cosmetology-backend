import { Router } from 'express';

import type { RequestType } from 'lib/core';

import { getArticleBySlug, getArticles } from './controller';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/articles', async (req: RequestType<{ limit: number }>, res) => {
  const { limit } = req.body;
  const result = await getArticles(limit);

  return res.status(200).json(result);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/articles/:slug', async (req: RequestType<{ slug: string }>, res) => {
  const { slug } = req.params;

  const result = await getArticleBySlug(slug);

  if (!result) {
    return res.status(200).json({ error: 'Not Found' });
  }

  return res.status(200).json(result);
});

export default router;
