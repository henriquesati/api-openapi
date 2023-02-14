import { Router, json, NextFunction, RequestHandler, Request, Response} from "express";
import { UpdateProductController } from "../controllers/updateProductController";
import { idtoNumber } from "./selectProductRoutes";
import { pricetoNumber } from "./createProductRoutes";

const updateProductController = new UpdateProductController()
const router = Router()



router.post('/update',idtoNumber, pricetoNumber, updateProductController.handle)

export { router as updateProductRouter}