import { Router, Request, Response } from 'express';
import { deliveryController } from './delivery.controller';
const deliveryRouter = Router();


deliveryRouter.post('/',(req:Request,res:Response)=>{deliveryController.createAdmin(req,res)});
deliveryRouter.patch('/:id',(req:Request,res:Response)=> {deliveryController.updateAdmin(req,res)});
deliveryRouter.delete('/:id',(req:Request,res:Response)=> {deliveryController.deleteAdmin(req,res)})
deliveryRouter.post('/login',(req:Request , res:Response) =>{deliveryController.loginAdmin(req,res)})

export default deliveryRouter;