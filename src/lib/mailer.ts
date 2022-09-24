import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: '"smtp.yandex.ru',
  port: 465,
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

export const sendMail = async (): Promise<void> => {
  await transporter.sendMail(getMailOptions());
};
