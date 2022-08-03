import { Router, Request, Response } from 'express';
import { carrtDeliveryController } from './deliverys.controller';

const cartDeliveryRouter = Router();


cartDeliveryRouter.get('/:id',(req:Request , res:Response) =>{carrtDeliveryController.getCart(req,res)})

export default cartDeliveryRouter;