import { Request, Response } from "express";
import { couponseRepo } from "../coupons.repo";



const getCouponse= async (req:Request , res:Response) =>{
    const id = req.params.id;
    const couponse = couponseRepo.getCouponseById(id);
    if (!couponse) res.json({'store':'not found'});
    res.json({'store':couponse});


}

export const clientsController = {

    getCouponse

}