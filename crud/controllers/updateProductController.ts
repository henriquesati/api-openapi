import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class UpdateProductController{
    async handle(request: Request, response:Response){
        let { id, name, category, brand, price } = request.body
        const prodUpdate = await prisma.products.update(
            {
                where: { id,},
                data:{ name, category, brand, price}
            }
            
        ) 
        return response.json(prodUpdate)
}
}