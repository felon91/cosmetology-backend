import { Router } from 'express';

import articlesRoutes from 'api/articles';
import bidsRoutes from 'api/bids';

const api = Router();

api.use(articlesRoutes);
api.use(bidsRoutes);

export default api;
