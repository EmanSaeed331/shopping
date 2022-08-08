import { Request, Response } from "express";
import { 
    cartsRepo } from "../carts.repo";



const getCarts = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const cart = cartsRepo.getCartsById(id);
    if (!cart) res.json({'Carts':'not found'});
    res.json({'Carts':cart});

}
const addProductToCart = async(req:Request , res:Response) => {
    const productId = req.body;
    const userId = req.User._id;
    const cart = cartsRepo.addProductToCart(productId , userId) ; 
    if (!cart) {res.json({'message': 'please check user Id'})}
    res.json({'message':cart});
}

const applyCoupon = async (req:Request , res:Response) =>{ 
    const userId =req.User._id;
    const cart = cartsRepo.appliedCoupon(userId)
    res.json({'Cart after applied coupon':cart});
}
const removeItemsfromCart = async (req:Request , res:Response) =>{
    const user = req.User._id;
    const item = req.params.itemId;
    const cart = cartsRepo.removeItemsFromCarts(user , item);
    res.json({"cart":cart});
}
export const clientsController = {
    getCarts , 
    addProductToCart,
    applyCoupon,
    removeItemsfromCart

}
