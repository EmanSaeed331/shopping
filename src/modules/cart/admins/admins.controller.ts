import { Request, Response } from "express";
import { cartsRepo } from "../carts.repo";

const createCart = (req:Request , res:Response) => { 
    const cart = req.body;
    const cartData = cartsRepo.createCarts(cart);
    res.json({'user':cartData});
}


const updateCarts = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedCarts = await cartsRepo.updating(id);
    if(!updatedCarts) res.json({'message':'invalid cart'});
    res.json({'updatedCart':updatedCarts});
}

const deleteCart = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedCart = cartsRepo.deleting(id);
    if(!deletedCart) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedCart'})
}


const getCart = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const cart = cartsRepo.getCartsById(id);
    if (!cart) res.json({'Cart':'not found'});
    res.json({'Cart':cart});


}

export const adminsController = {
    createCart,
    updateCarts,
    deleteCart,
    getCart

}