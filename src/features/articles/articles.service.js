import prisma from '../core/db/prisma-client.js';

export default async function getArticles() {
    try {
        const articles = await prisma.articulos.findMany();
        return articles;
    } catch (error) {
        console.error('Error in the service fetching articles:', error);
        throw new Error('Error fetching articles');
    }
}
