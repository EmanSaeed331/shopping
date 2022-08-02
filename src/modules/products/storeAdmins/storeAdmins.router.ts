import { Router, Request, Response } from 'express';
import { adminsStoreController } from './storeAdmins.controller';

const storesAdminRouter = Router();


storesAdminRouter.post('/',(req:Request,res:Response)=>{adminsStoreController.createStore(req,res)});
storesAdminRouter.patch('/:id',(req:Request,res:Response)=> {adminsStoreController.updateStore(req,res)});
storesAdminRouter.delete('/:id',(req:Request,res:Response)=> {adminsStoreController.deleteStore(req,res)})
storesAdminRouter.get('/:id',(req:Request , res:Response) =>{adminsStoreController.getStore(req,res)})

export default storesAdminRouter;