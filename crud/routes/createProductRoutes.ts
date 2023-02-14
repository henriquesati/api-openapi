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

//deprecated get
router
    .get('/create', (req,res) => {
    res.send(`
    <form action="/create" method="POST">
    <input placeholder="name" type="text" name="name"> <br>
    <input placeholder="category" type="text" name="category"> <br>
    <input placeholder="brand" type="text" name="brand"> <br>
    <input placeholder="price" type="text" name="price">
    <button type="submit">Create</button>
    </form>
    `)    
})
 router
 .post('/create', pricetoNumber, createProduct.handle)



export { }
export { router as createProductRouter}
export { pricetoNumber }