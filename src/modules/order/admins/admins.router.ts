import { Router, Request, Response } from 'express';
import { adminsController } from './admins.controller';

const adminRouter = Router();


adminRouter.post('/',(req:Request,res:Response)=>{adminsController.createOrder(req,res)});
adminRouter.patch('/:id',(req:Request,res:Response)=> {adminsController.updateOrder(req,res)});
adminRouter.delete('/:id',(req:Request,res:Response)=> {adminsController.deleteOrder(req,res)})
adminRouter.get('/:id',(req:Request , res:Response) =>{adminsController.getOrder(req,res)})

export default adminRouter;