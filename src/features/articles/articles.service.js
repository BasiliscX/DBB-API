import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function getArticles() {
    try {
        const articulos = await prisma.articulos.findMany();
        console.log(articulos);
        return articulos;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw new Error('Error fetching articles');
    }
}
