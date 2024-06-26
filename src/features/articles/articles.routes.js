import express from 'express';
import { listArticles } from './articles.controller.js';

const router = express.Router();

router.get('/', listArticles);

router.post('/', listArticles);

export default router;