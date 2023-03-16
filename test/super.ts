import { log } from "console";
import { object, string, number, assert, optional } from "superstruct";

interface Produto {
    id?: number
    name: string
    category: string
    brand: string
    price: number
}
export const produto: Produto = {
    name: "mouse",
    category: "periférico",
    brand: "multilaser",
    price:20 }

export const idDelete: object ={
	"id": "90"
}

export const notProduct = {
    xxxx : 'zzzz',
    xxxx2: 'jikiik',
    xxxx3: 'zzzzz'
}

const ProdutoSchema = object({
    id: optional(number()),
    name: string(),
    category: string(),
    brand: string(),
    price: number(),
});

export function isProduct(object: unknown): object is Produto {
    try {
        assert(produto, ProdutoSchema)
        return true;
    } catch(err) {
        return false
    }
}
