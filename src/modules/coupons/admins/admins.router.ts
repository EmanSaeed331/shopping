import { Router, Request, Response } from 'express';
import { adminsController } from './admins.controller';

const adminRouter = Router();


adminRouter.post('/',(req:Request,res:Response)=>{adminsController.createCoupone(req,res)});
adminRouter.patch('/:id',(req:Request,res:Response)=> {adminsController.updateCoupone(req,res)});
adminRouter.delete('/:id',(req:Request,res:Response)=> {adminsController.deleteCoupone(req,res)})
adminRouter.get('/:id',(req:Request , res:Response) =>{adminsController.getCoupone(req,res)})

export default adminRouter;