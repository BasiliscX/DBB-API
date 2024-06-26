import express from 'express';
import { listSuppliers } from './suppliers.controller.js';

const router = express.Router();

router.get('/', listSuppliers);

router.post('/', listSuppliers);

export default router;