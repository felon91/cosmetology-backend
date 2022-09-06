import { Router } from 'express';

import { getCategories, getHolidays } from './controller';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/categories', async (req, res) => {
  const result = await getCategories();

  return res.status(200).json(result);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/holidays', async (req, res) => {
  const result = await getHolidays();

  return res.status(200).json(result);
});

export default router;
