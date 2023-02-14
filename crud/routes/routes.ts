import { Router, json, NextFunction, RequestHandler, Request, Response} from "express";
import { Express } from "express";
import { createProductRouter } from "./createProductRoutes";
import { selectProductRouter } from "./selectProductRoutes";
import { updateProductRouter } from "./updateProductRoute";
import { deleteProductRouter } from "./deleteProductRoute";




const routes = Router()
routes.use(createProductRouter)
routes.use(selectProductRouter)
routes.use(updateProductRouter)
routes.use(deleteProductRouter)



routes.get('/', (req, res)=>{
res.send('hello world')
})


export { }
export { routes }