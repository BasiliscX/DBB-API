import getArticlesXSuppliers from './articlesxsuplies.service.js';

export async function listArticlesXSuppliers(req, res, next) {
    try {
        const articlesXSuppliers = await getArticlesXSuppliers();
        res.status(200).json(articlesXSuppliers);
    } catch (error) {
        next(error);
    }
}