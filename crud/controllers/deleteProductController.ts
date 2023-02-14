import { Request, response, Response } from 'express'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient


export class DeleteProductController{
    async handle(request: Request, response: Response) {
        const { id } = request.body
        
        if (Number.isNaN(id)){ return response.json(`invalid price `) }
        
        const deleteProduct = await prisma.products.delete(
            {
                where:
                {
                    id,
                }
            }
            
           )
        return response.json(deleteProduct)
    }   

}
async function main() {
    let delet = await prisma.products.delete(
        {
            where: { id: 2}
        }
    ) 
    console.log(delet);
    
}
// main()