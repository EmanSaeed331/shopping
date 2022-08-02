import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const couponClientsRouter = Router();


couponClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getCouponse(req,res)})

export default couponClientsRouter;