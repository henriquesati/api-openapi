import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class SelectProductController{
    async handle(request: Request, response: Response) {
        const id = parseInt(request.params.id)
        if (Number.isNaN(id)) {
            return response.json(`invalid id ${request.params.id}`)
        }
        
        const select = await prisma.products.findUnique({ where: { id } })
        return response.send(select)
    }
}