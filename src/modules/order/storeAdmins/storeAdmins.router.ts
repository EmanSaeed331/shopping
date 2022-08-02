import { Router, Request, Response } from 'express';
import { adminsStoreController } from './storeAdmins.controller';

const storesAdminRouter = Router();


storesAdminRouter.post('/',(req:Request,res:Response)=>{adminsStoreController.createing(req,res)});
storesAdminRouter.patch('/:id',(req:Request,res:Response)=> {adminsStoreController.updating(req,res)});
storesAdminRouter.delete('/:id',(req:Request,res:Response)=> {adminsStoreController.deleteOrders(req,res)})
storesAdminRouter.get('/:id',(req:Request , res:Response) =>{adminsStoreController.getorders(req,res)})

export default storesAdminRouter;