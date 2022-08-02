import { Request, Response } from "express";
import { productsRepo } from "../product.repo"



const getProduct = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const store = productsRepo.getProductById(id);
    if (!store) res.json({'store':'not found'});
    res.json({'store':store});


}

export const clientsController = {

    getProduct

}