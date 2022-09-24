import { createTransport } from 'nodemailer';

import { fail } from 'lib/core';

import { Bid } from './model';

import type { BidProps } from 'api/bids/core';
import type { Response } from 'express';

const transporter = createTransport({
  host: '"smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const getMailOptions = () => ({
  from: 'firebooom@yandex.by', // Sender address
  to: 'felon1991@yandex.ru', // List of recipients
  subject: 'Заявка с сайта', // Subject line
  html: 'This <i>message</i> with <strong>attachments</strong>.',
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const saveBid = (res: Response, data: BidProps) => {
  const bid = new Bid(data);

  bid.save(function (err) {
    if (err) {
      return res
        .status(200)
        .json({ ...fail, errors: [{ field: 'phone', msg: 'Некорректный телефон' }] });
    }
    void transporter.sendMail(getMailOptions());
    return res.status(200).json({ success: true, body: null, errors: null });
  });
};
