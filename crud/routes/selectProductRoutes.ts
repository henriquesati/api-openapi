import { Router, json, NextFunction, RequestHandler, Request, Response} from "express";
import { SelectProductController } from "../controllers/selectProductController";


const selectProductController = new SelectProductController()
const router = Router()

const idtoNumber = (request: Request, response:Response, next:NextFunction) => {
    let { id } = request.body
    let idnum = parseInt(id)
    request.body.id = idnum
    
    next()
}


router.post('/select',idtoNumber, selectProductController.handle)

export { router as selectProductRouter}
export { idtoNumber}
