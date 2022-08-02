import { Request, Response } from "express";
import { OrdersRepo } from "../orders.repo";

const createing= (req:Request , res:Response) => { 
    const order = req.body;
    const orderData = OrdersRepo.createOrders(order);
    res.json({'order':orderData});
}


const updating = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedOrders = await OrdersRepo.updating(id);
    if(!updatedOrders) res.json({'message':'invalid orders'});
    res.json({'updatedorders':updatedOrders});
}

const deleteOrders = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedorders = OrdersRepo.deleting(id);
    if(!deletedorders) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedorders'})
}


const getorders = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const orders = OrdersRepo.getOrdersById(id);
    if (!orders) res.json({'orders':'not found'});
    res.json({'orders':orders});


}

export const adminsStoreController = {
    createing,
    updating,
    deleteOrders,
    getorders

}