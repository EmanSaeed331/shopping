import { Router, Request, Response } from 'express';
import { couponseController } from './couponse.controller';

const couponseRouter = Router();


couponseRouter.post('/',(req:Request,res:Response)=>{couponseController.createCouponse(req,res)});
couponseRouter.patch('/:id',(req:Request,res:Response)=> {couponseController.updateCouponse(req,res)});
couponseRouter.delete('/:id',(req:Request,res:Response)=> {couponseController.deleteCouponse(req,res)})
couponseRouter.post('/login',(req:Request , res:Response) =>{couponseController.getCouponseById(req,res)})

export default couponseRouter;