
import { Request , Response } from "express";
import { crud } from "../../CRUD/crud";
import { Cart } from "./types";
import cartModel from "./carts.model";


const createCart= (req:Request , res:Response) => { 
    const couponse =  crud.create(Cart,cartModel);
    res.json({'user':couponse});
}


const updateCart=async (req:Request, res:Response) => { 
    const id = req.params.id;
    const couponse=await crud.update(id , Cart , cartModel) ; 
    if (!couponse) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'Store':couponse});
    return couponse; }

const deleteCart =async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedCouponse=await  crud.remove(id , cartModel) ;
    if ( !deletedCouponse) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Productdeleted'})
    return deletedCouponse;
}

const getCartById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const Couponse= await  crud.getById(id, cartModel);
        res.json({'LoggedIn User ':Couponse})
}
export const cartController = {
    createCart,
    updateCart,
    deleteCart,
    getCartById
}