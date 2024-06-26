import express from 'express';
import { listArticles } from './articles.controller.js';

const router = express.Router();

router.post('/', listArticles);

export default router;