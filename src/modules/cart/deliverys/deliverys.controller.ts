import { Request, Response } from "express";
import { cartsRepo } from "../carts.repo";



const getCart = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const cart = cartsRepo.getCartsById(id);
    if (!cart) res.json({'store':'not found'});
    res.json({'store':cart});


}

export const carrtDeliveryController = {

    getCart

}