
import { Request , Response } from "express";
import { OrdersRepo } from "./orders.repo";

// Create Orders
const createOrders= (req:Request , res:Response) => { 
    const orders = req.body;
    const orderData = OrdersRepo.createOrders(orders);
    res.json({'user':orderData});
}


const updateOrders= async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const Orders= await OrdersRepo.updating(id);
    if(!Orders) res.json({'message':'invalid store'});
    res.json({'updatedOrder':Orders});
}

const deleteOrders= async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedOrders= OrdersRepo.deleting(id);
    if(!deletedOrders) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedOrder'})
}


const getOrdersById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const Orders= await  OrdersRepo.getOrdersById(id);
        res.json({'Orders':Orders})
}

export const OrdersController = 
    {
        createOrders,
        updateOrders,
        deleteOrders,
        getOrdersById

    }