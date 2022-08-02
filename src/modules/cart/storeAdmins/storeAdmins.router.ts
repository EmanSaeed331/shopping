import { Router, Request, Response } from 'express';
import { adminsCartsController } from './storeAdmins.controller';

const storesAdminRouter = Router();


storesAdminRouter.post('/',(req:Request,res:Response)=>{adminsCartsController.createCarts(req,res)});
storesAdminRouter.patch('/:id',(req:Request,res:Response)=> {adminsCartsController.updatingCarts(req,res)});
storesAdminRouter.delete('/:id',(req:Request,res:Response)=> {adminsCartsController.deleteCarts(req,res)})
storesAdminRouter.get('/:id',(req:Request , res:Response) =>{adminsCartsController.getCarts(req,res)})

export default storesAdminRouter;