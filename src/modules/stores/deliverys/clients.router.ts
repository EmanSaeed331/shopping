import { Router, Request, Response } from 'express';
import { storeDeliveryController } from './deliverys.controller';

const storeDeliveryRouter = Router();


storeDeliveryRouter.get('/:id',(req:Request , res:Response) =>{storeDeliveryController.getStore(req,res)})

export default storeDeliveryRouter;