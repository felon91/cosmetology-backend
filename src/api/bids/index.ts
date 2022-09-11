// eslint-disable-next-line @typescript-eslint/no-misused-promises
import { Router } from 'express';

import type { RequestType } from 'lib/core';

import { saveBid } from 'api/bids/controller';

import type { BidProps } from 'api/bids/core';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/bids', (req: RequestType<BidProps>, res) => saveBid(res, req.body));

export default router;
