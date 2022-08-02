import { Request, Response } from "express";
import { productsRepo } from "../product.repo";



const getProduct = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const product = productsRepo.getProductById(id);
    if (!product) res.json({'product':'not found'});
    res.json({'product':product});


}

export const productDeliveryController = {

    getProduct

}