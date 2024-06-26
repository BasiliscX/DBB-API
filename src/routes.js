import express from 'express';
import mainpage from './features/mainpage/mainpage.routes.js';
import articles from './features/articles/articles.routes.js';
import suppliers from './features/suppliers/supliers.routes.js';
import articlesxsuppliers from './features/articlesxsuppliers/articlesxsuplies.routes.js';

const route = express.Router();

route.use('/', mainpage);
route.use('/dbb/articles', articles);
route.use('/dbb/suppliers', suppliers);
route.use('/dbb/articlesxsuppliers', articlesxsuppliers);

export default route;