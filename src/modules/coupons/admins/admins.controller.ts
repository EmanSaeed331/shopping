import { Request, Response } from "express";
import { couponseRepo } from "../coupons.repo";

const createCoupone = (req:Request , res:Response) => { 
    const coupone = req.body;
    const couponeData = couponseRepo.createCouponse(coupone);
    res.json({'user':couponeData});
}


const updateCoupone = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedCoupone = await couponseRepo.updating(id);
    if(!updatedCoupone) res.json({'message':'invalid coupone'});
    res.json({'updatedcoupone':updatedCoupone});
}

const deleteCoupone = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedCoupone = couponseRepo.deleting(id);
    if(!deletedCoupone) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedcoupone'})
}


const getCoupone = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const coupone = couponseRepo.getCouponseById(id);
    if (!coupone) res.json({'coupone':'not found'});
    res.json({'coupone':coupone});


}

export const adminsController = {
    createCoupone,
    updateCoupone,
    deleteCoupone,
    getCoupone

}