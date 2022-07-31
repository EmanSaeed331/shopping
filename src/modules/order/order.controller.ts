
import { Request , Response } from "express";
import { crud } from "../../CRUD/crud";
import { Order } from "./types";
import orderModel from "./order.model";

// Create order 
const createOrder= (req:Request , res:Response) => { 
    const user =  crud.create(Order,orderModel);
    res.json({'user':user});
}

// update Product
const updateOrder=async (req:Request, res:Response) => { 
    const id = req.params.id;
    const product=await crud.update(id , Order , orderModel) ; 
    if (!product) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'Store':product});
    return product; }
// delete Product
const deleteOrder= async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedProduct=await  crud.remove(id , orderModel) ;
    if ( !deletedProduct) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Productdeleted'})
    return deletedProduct;
}

const getOrderById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const Product= await  crud.getById(id, orderModel);
        res.json({'LoggedIn User ':Product})
}
export const orderController = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderById
}