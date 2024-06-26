import express from 'express';
import mainpage from './features/mainpage/mainpage.routes.js';
import articles from './features/articles/articles.routes.js';
import suppliers from './features/suppliers/supliers.routes.js';

const route = express.Router();

route.use('/dbb', mainpage);
route.use('/dbb/articles', articles);
route.use('/dbb/suppliers', suppliers);

export default route;