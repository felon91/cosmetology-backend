import { createTransport } from 'nodemailer';

const transporter = createTransport({
  //host: 'smtp.gmail.com',
  service: 'gmail',
  port: 465,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const getMailOptions = () => ({
  from: 'alicosmatology@gmail.com', // Sender address
  to: 'felon_91@mail.ru', // List of recipients
  subject: 'Заявка с сайта', // Subject line
  html: 'This <i>message</i> with <strong>attachments</strong>.',
});

export const sendMail = async (): Promise<void> => {
  await transporter.sendMail(getMailOptions());
};
