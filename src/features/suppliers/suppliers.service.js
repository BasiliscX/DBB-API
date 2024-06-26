import prisma from '../core/db/prisma-client.js';

export default async function getSuppliers() {
    try {
        const suppliers = await prisma.proveedores.findMany();
        return suppliers;
    } catch (error) {
        console.error('Error in the service fetching suppliers:', error);
        throw new Error('Error fetching suppliers');
    }
}
