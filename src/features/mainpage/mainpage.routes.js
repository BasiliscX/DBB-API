// src/features/mainpage/mainpage.routes.js
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../views/welcome.html');
    res.sendFile(filePath);
});

export default router;
