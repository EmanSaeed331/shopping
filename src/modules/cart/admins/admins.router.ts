import { Router, Request, Response } from 'express';
import { adminsController } from './admins.controller';

const adminRouter = Router();


adminRouter.post('/',(req:Request,res:Response)=>{adminsController.createCart(req,res)});
adminRouter.patch('/:id',(req:Request,res:Response)=> {adminsController.updateCarts(req,res)});
adminRouter.delete('/:id',(req:Request,res:Response)=> {adminsController.deleteCart(req,res)})
adminRouter.get('/:id',(req:Request , res:Response) =>{adminsController.getCart(req,res)})

export default adminRouter;