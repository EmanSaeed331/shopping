import { Router, Request, Response } from 'express';
import { orderDeliveryController } from './deliverys.controller';

const productDeliveryRouter = Router();


productDeliveryRouter.get('/:id',(req:Request , res:Response) =>{orderDeliveryController.getOrder(req,res)})

export default productDeliveryRouter;