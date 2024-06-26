import { prismaClient } from '@´prismma/client';

export async function prismaClient(prisma){
    if(!prisma){
        prisma = new PrismaClient();
    }
}