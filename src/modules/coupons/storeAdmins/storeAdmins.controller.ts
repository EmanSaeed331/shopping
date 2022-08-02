import { Request, Response } from "express";
import { couponseRepo } from "../coupons.repo";

const create = (req:Request , res:Response) => { 
    const store = req.body;
    const storeData = couponseRepo.createCouponse(store);
    res.json({'user':storeData});
}

const updateCouponse = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedCouponse = await couponseRepo.updating(id);
    if(!updateCouponse) res.json({'message':'invalid Couponse'});
    res.json({'updatedCouponse':updatedCouponse});
}

const deleteCouponse = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedCouponse = couponseRepo.deleting(id);
    if(!deletedCouponse) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedCouponse'})
}


const getCouponse = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const Couponse = couponseRepo.getCouponseById(id);
    if (!Couponse) res.json({'Couponse':'not found'});
    res.json({'Couponse':Couponse});


}

export const adminsStoreController = {
    create,
    updateCouponse,
    deleteCouponse,
    getCouponse

}