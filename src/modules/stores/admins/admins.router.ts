import { Router, Request, Response } from 'express';
import { adminsController } from './admins.controller';

const adminRouter = Router();


adminRouter.post('/',(req:Request,res:Response)=>{adminsController.createStore(req,res)});
adminRouter.patch('/:id',(req:Request,res:Response)=> {adminsController.updateStore(req,res)});
adminRouter.delete('/:id',(req:Request,res:Response)=> {adminsController.deleteStore(req,res)})
adminRouter.get('/:id',(req:Request , res:Response) =>{adminsController.getStore(req,res)})

export default adminRouter;