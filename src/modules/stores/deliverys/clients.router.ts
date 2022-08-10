import { Router, Request, Response } from 'express';
import { storeDeliveryController } from './deliverys.controller';

const storeDeliveryRouter = Router();


storeDeliveryRouter.get('/readStore/:id',(req:Request , res:Response) =>{storeDeliveryController.getStore(req,res)})
storeDeliveryRouter.get('/allStores',(req:Request , res:Response) =>{storeDeliveryController.showAllStores(req,res)})

export default storeDeliveryRouter;