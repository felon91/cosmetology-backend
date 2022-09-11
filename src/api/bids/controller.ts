import { Bid } from './model';

import type { BidProps } from 'api/bids/core';
import type { Response } from 'express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const saveBid = (res: Response, data: BidProps) => {
  const bid = new Bid(data);

  bid.save(function (err) {
    if (err) {
      return res.status(500).json('Error');
    }
    return res.status(200).json('Success');
  });
};
