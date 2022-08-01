
import { Request , Response } from "express";
import { couponseRepo } from "./coupons.repo";


const createCouponse= (req:Request , res:Response) => { 
    const coupon = req.body;
    const couponData = couponseRepo.createCouponse(coupon);
    res.json({'coupon':coupon});
}


const updateCouponse= async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const coupon= await couponseRepo.updating(id);
    if(!coupon) res.json({'message':'invalid store'});
    res.json({'updatedStore':coupon});
}

const deleteCouponse= async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedcoupon= couponseRepo.deleting(id);
    if(!deletedcoupon) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedCoupone'})
}


const getCouponseById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const couponse= await  couponseRepo.getCouponseById(id);
        res.json({'Couponse':couponse})
}

export const CouponseController = 
    {
        createCouponse,
        updateCouponse,
        deleteCouponse,
        getCouponseById

    }