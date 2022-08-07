import { Request, Response } from "express";
import cartsModel from "../../cart/carts.model";
import { OrdersRepo } from "../orders.repo";



const createOrder = async (req:Request , res:Response) => { 
    const {order} = req.body;
    const cart = await cartsModel.findById(req.params.cartId);
/*     const user = req.User?._id;
    const cartItem = cart!.items;
    const shippingAddress = req.body.shippingAddress; */
    const orderData = OrdersRepo.createOrders(order);
    res.json({'user':orderData});
}


const updateOrder = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedOrder = await OrdersRepo.updating(id);
    if(!updateOrder) res.json({'message':'invalid Order'});
    res.json({'updatedOrder':updatedOrder});
}

const deleteOrder = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedOrder = OrdersRepo.deleting(id);
    if(!deletedOrder) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedOrder'})
}


const getOrder = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const Order = OrdersRepo.getOrdersById(id);
    if (!Order) res.json({'Order':'not found'});
    res.json({'Order':Order});
}

export const clientsController = {

    createOrder,
    updateOrder,
    deleteOrder,
    getOrder

}