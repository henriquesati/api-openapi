import { Router, json, NextFunction, RequestHandler, Request, Response} from "express";
import { Express } from "express";
import { CreateProductController } from "../controllers/createProductController";

const createProduct = new CreateProductController()
const router = Router()

const pricetoNumber = (request: Request, response:Response, next:NextFunction) => {
    let { price } = request.body
    request.body.price = Number(price)
    next()
}

 router
 .post('/create', pricetoNumber, createProduct.handle)



export { }
export { router as createProductRouter}
export { pricetoNumber }