import { Request, Response } from "express";
import { OrdersRepo } from "../orders.repo";



const getOrder = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const order = OrdersRepo.getOrdersById(id);
    if (!order) res.json({'store':'not found'});
    res.json({'store':order});


}

export const orderDeliveryController = {

    getOrder

}