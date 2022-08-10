import { Request, Response } from "express";
import { productsRepo } from "../product.repo"



const getProduct = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const product = await productsRepo.getProductById(id);
    if (!product) res.json({'product':'not found'});
    res.json({'product':product});

}

const showAllProducts = async (req:Request , res:Response)=>{ 
    const products =await  productsRepo.getAllProducts();
    res.json({'Products':products})
}
export const clientsController = {

    getProduct,
    showAllProducts

}