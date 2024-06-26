import prisma from '../core/db/prisma-client.js';

export default async function getArticlesXSuppliers() {
    try {
        const articlesXSuppliers = await prisma.ArticulosXProveedor.findMany();
        return articlesXSuppliers;
    } catch (error) {
        console.error('Error in the service fetching articlesXSuppliers:', error);
        throw new Error('Error fetching articlesXSuppliers');
    }
}
