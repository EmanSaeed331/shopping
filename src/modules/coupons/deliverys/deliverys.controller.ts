import { Request, Response } from "express";
import { couponseRepo } from "../coupons.repo";



const getCoupne= async (req:Request , res:Response) =>{
    const id = req.params.id;
    const store = couponseRepo.getCouponseById(id);
    if (!store) res.json({'store':'not found'});
    res.json({'store':store});


}

export const couponeDeliveryController = {

    getCoupne

}