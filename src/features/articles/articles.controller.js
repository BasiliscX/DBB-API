import getArticles from './articles.service.js';

export async function listArticles(req, res, next) {
    try {
        const articles = await getArticles();
        res.status(200).json(articles);
    } catch (error) {
        next(error);
    }
}