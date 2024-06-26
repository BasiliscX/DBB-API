import getSuppliers from './suppliers.service.js';

export async function listSuppliers(req, res, next) {
    try {
        const supliers = await getSuppliers();
        res.status(200).json(supliers);
    } catch (error) {
        next(error);
    }
}