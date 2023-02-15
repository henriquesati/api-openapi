import { Router, json, NextFunction, RequestHandler, Request, Response} from "express";
import { DeleteProductController } from "../controllers/deleteProductController";
import { idtoNumber } from "./selectProductRoutes";
import { pricetoNumber } from "./createProductRoutes";

const deleteProduct = new DeleteProductController()
const router = Router()



router.delete('/delete',idtoNumber, pricetoNumber, deleteProduct.handle)

export { router as deleteProductRouter}