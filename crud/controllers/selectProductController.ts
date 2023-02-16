import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export class SelectProductController{
    async handle(request: Request, response: Response) {
        const { id } = request.body
        if (Number.isNaN(id)){ return response.json(`invalid price ${id}, ${typeof id}`) }
        
        const select = await prisma.products.findMany 
        ( { where:{ id, } } )
           return response.send(select)
    }
}
