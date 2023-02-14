import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";
import { type } from 'os';


const prisma = new PrismaClient()

export class CreateProductController{
    async handle(request: Request, response:Response) {
        let {name, category, brand, price} = request.body
        if (Number.isNaN(price)){ return response.send(`invalid price ${price}, ${typeof price}`) }

        const produto = await prisma.products.create(
            {
                data:  
                    {
                        name,
                        category, 
                        brand,
                        price
                    }
                    
            }
        )
        response.send(`quered!, your data:' ${name}, ${category}, ${brand}, ${price}`)
    }
}


