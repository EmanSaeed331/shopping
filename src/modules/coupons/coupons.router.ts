import { Router, Request, Response } from 'express';
import { CouponseController } from './couponse.controller';

const couponseRouter = Router();


couponseRouter.post('/',(req:Request,res:Response)=>{CouponseController.createCouponse(req,res)});
couponseRouter.patch('/:id',(req:Request,res:Response)=> {CouponseController.updateCouponse(req,res)});
couponseRouter.delete('/:id',(req:Request,res:Response)=> {CouponseController.deleteCouponse(req,res)})
couponseRouter.post('/:id',(req:Request , res:Response) =>{CouponseController.getCouponseById(req,res)})

export default couponseRouter;