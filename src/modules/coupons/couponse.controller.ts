
import { Request , Response } from "express";
import { crud } from "../../CRUD/crud";
import { Couponse } from "./types";
import couponseModel from "./coupons.model";


const createCouponse= (req:Request , res:Response) => { 
    const couponse =  crud.create(Couponse,couponseModel);
    res.json({'user':couponse});
}


const updateCouponse=async (req:Request, res:Response) => { 
    const id = req.params.id;
    const couponse=await crud.update(id , Couponse , couponseModel) ; 
    if (!couponse) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'Store':couponse});
    return couponse; }

const deleteCouponse= async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedCouponse=await  crud.remove(id , couponseModel) ;
    if ( !deletedCouponse) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Productdeleted'})
    return deletedCouponse;
}

const getCouponseById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const Couponse= await  crud.getById(id, couponseModel);
        res.json({'LoggedIn User ':Couponse})
}
export const couponseController = {
    createCouponse,
    updateCouponse,
    deleteCouponse,
    getCouponseById
}