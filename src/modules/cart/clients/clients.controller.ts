import { Request, Response } from "express";
import { cartsRepo } from "../carts.repo";



const getCarts = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const cart = cartsRepo.getCartsById(id);
    if (!cart) res.json({'Carts':'not found'});
    res.json({'Carts':cart});


}

export const clientsController = {

    getCarts

}