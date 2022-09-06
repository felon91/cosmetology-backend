import { Router } from 'express';

import categoriesRoutes from 'api/categories';

const api = Router();

api.use(categoriesRoutes);

export default api;
