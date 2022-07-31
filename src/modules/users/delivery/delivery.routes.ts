import { Router, Request, Response } from 'express';
import { deliveryController } from './delivery.controller';
const deliveryRouter = Router();


deliveryRouter.post('/',(req:Request,res:Response)=>{deliveryController.createDelivery(req,res)});
deliveryRouter.patch('/:id',(req:Request,res:Response)=> {deliveryController.updateDelivery(req,res)});
deliveryRouter.delete('/:id',(req:Request,res:Response)=> {deliveryController.deleteDelivery(req,res)})
deliveryRouter.post('/login',(req:Request , res:Response) =>{deliveryController.loginDelivery(req,res)})

export default deliveryRouter;