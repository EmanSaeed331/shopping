import { Router, Request, Response } from 'express';
import { productDeliveryController } from './deliverys.controller';

const productDeliveryRouter = Router();


productDeliveryRouter.get('/:id',(req:Request , res:Response) =>{productDeliveryController.getProduct(req,res)})

export default productDeliveryRouter;