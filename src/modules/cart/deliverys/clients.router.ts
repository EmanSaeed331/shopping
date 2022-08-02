import { Router, Request, Response } from 'express';
import { storeDeliveryController } from './deliverys.controller';

const storeDeliveryRouter = Router();


storeDeliveryRouter.get('/:id',(req:Request , res:Response) =>{storeDeliveryController.getCart(req,res)})

export default storeDeliveryRouter;