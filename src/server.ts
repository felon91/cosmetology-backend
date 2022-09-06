import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import compression from 'compression';

import connectDb from './db';
import api from './api';

config();

connectDb();

// eslint-disable-next-line import/prefer-default-export
export const app = express();

app.use(compression());
app.use(json());
app.use(cors());

app.use('/api', api);
