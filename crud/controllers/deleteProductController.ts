import { Request, response, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    if (Number.isNaN(id)) {
      return response.json(`invalid id`);
    }
    try {
      const deleteProduct = await prisma.products.delete({
        where: {
          id,
        },
      });
      return response.json(deleteProduct);
    } catch (error) {
      response.status(404).json("registro não encontado ");
    }
  }
}
