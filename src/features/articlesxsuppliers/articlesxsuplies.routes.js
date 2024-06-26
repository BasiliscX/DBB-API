import express from 'express';
import { listArticlesXSuppliers } from './articlesxsuplies.controller.js';

const router = express.Router();

router.get('/', listArticlesXSuppliers);

router.post('/', listArticlesXSuppliers);

export default router;