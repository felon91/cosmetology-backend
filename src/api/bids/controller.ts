import { fail } from 'lib/core';
import { sendMail } from 'lib/mailer';

import { Bid } from './model';

import type { BidProps } from 'api/bids/core';
import type { Response } from 'express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const saveBid = (res: Response, data: BidProps) => {
  const bid = new Bid(data);

  bid.save(function (err) {
    if (err) {
      return res
        .status(200)
        .json({ ...fail, errors: [{ field: 'phone', msg: 'Некорректный телефон' }] });
    }
    void sendMail();
    return res.status(200).json({ success: true, body: null, errors: null });
  });
};
