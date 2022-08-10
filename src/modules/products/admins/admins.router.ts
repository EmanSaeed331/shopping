import { Router, Request, Response } from 'express';
import { adminsController } from './admins.controller';

const adminRouter = Router();


adminRouter.post('/:storeId',(req:Request,res:Response)=>{adminsController.createProduct(req,res)});
adminRouter.patch('/:id',(req:Request,res:Response)=> {adminsController.updateProduct(req,res)});
adminRouter.delete('/:id',(req:Request,res:Response)=> {adminsController.deleteProduct(req,res)})
adminRouter.get('/:id',(req:Request , res:Response) =>{adminsController.getProduct(req,res)})

export default adminRouter;