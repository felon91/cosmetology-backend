/* eslint-disable no-console */
import mongoose from 'mongoose';
import https from 'https';

import { app } from 'server';

const connectDb = (): void => {
  const url = process.env.DB_URL;

  if (!url) {
    return;
  }

  const server = process.env.ENV === 'production' ? () => https.createServer(app) : () => app;

  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(error => console.error(error, 'Connection error'));

  mongoose.connection.on('connected', () => {
    server().listen(process.env.PORT);
    console.log('Mongoose connected');
    console.log('Server listening on:', process.env.PORT);
  });
};

export default connectDb;
