import { Router, Request, Response } from 'express';
import { couponeDeliveryController } from './deliverys.controller';

const couponseDeliveryRouter = Router();


couponseDeliveryRouter.get('/:id',(req:Request , res:Response) =>{couponeDeliveryController.getStore(req,res)})

export default couponseDeliveryRouter;