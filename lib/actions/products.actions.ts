'use server';
//import { PrismaClient } from "../generated/prisma/client";
//import { PrismaPg } from '@prisma/adapter-pg';
import {prisma} from '@/db/prisma';
import {LATEST_PRODUCTS_LIMIT} from "../constants";
import { converToPlainObject } from "../utils";


//const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL});
//const prisma = new PrismaClient({adapter});

//Get latest products
export async function getLatestProducts(){
 const products = await prisma.product.findMany({
            take: LATEST_PRODUCTS_LIMIT,
            orderBy: {createdAt: 'desc'}
        });

    return converToPlainObject(products);
}

//Get single product by it's slug
export async function getProductBySlug(slug: string){
    return await prisma.product.findFirst({
        where: {slug: slug},
        
    });
}

