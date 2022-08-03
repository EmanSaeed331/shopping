import { Router, Request, Response } from 'express';
import { adminsProductController } from './storeAdmins.controller';

const storesAdminRouter = Router();


storesAdminRouter.post('/',(req:Request,res:Response)=>{adminsProductController.createProduct(req,res)});
storesAdminRouter.patch('/:id',(req:Request,res:Response)=> {adminsProductController.updateProduct(req,res)});
storesAdminRouter.delete('/:id',(req:Request,res:Response)=> {adminsProductController.deleteProduct(req,res)})
storesAdminRouter.get('/:id',(req:Request , res:Response) =>{adminsProductController.getProduct(req,res)})

export default storesAdminRouter;