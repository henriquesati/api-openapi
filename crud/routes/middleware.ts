import { Router, json, NextFunction, RequestHandler, Request, Response} from "express";
import { Express } from "express";
import { CreateProductController } from "../controllers/createProductController";

export function pricetoNumber(
    request: Request,
    response: Response,
    next: NextFunction
) {
    let { price } = request.body
    request.body.price = parseInt(price) as number  
    next()
}

export function idtoNumber(
    request: Request,
    response: Response,
    next: NextFunction
) {
    let { id } = request.body
    if (!id) {
        id = request.params.id
    }
    request.body.id = parseInt(id) as number
    next()
}