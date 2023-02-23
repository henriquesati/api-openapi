import { Router, json, NextFunction, RequestHandler, Request, Response} from "express";
import { pricetoNumber, idtoNumber } from "./middleware";
import { CreateProductController } from "../controllers/createProductController";
import { SelectProductController } from "../controllers/selectProductController";
import { UpdateProductController } from "../controllers/updateProductController";
import { DeleteProductController } from "../controllers/deleteProductController";

const createProduct = new CreateProductController()
const selectProduct = new SelectProductController()
const updateProduct = new UpdateProductController()
const deleteProduct = new DeleteProductController()
const router = Router()

router
.post('/create', pricetoNumber, createProduct.handle)

router
.get('/select/:id', idtoNumber, selectProduct.handle)

router
.post('/update', idtoNumber, pricetoNumber, updateProduct.handle)

router
.delete('/delete',idtoNumber, deleteProduct.handle)

export { }
export { router }







