import { Router, Request, Response } from 'express';
import { adminsStoreController } from './storeAdmins.controller';

const storesAdminRouter = Router();


storesAdminRouter.post('/',(req:Request,res:Response)=>{adminsStoreController.create(req,res)});
storesAdminRouter.patch('/:id',(req:Request,res:Response)=> {adminsStoreController.updateCouponse(req,res)});
storesAdminRouter.delete('/:id',(req:Request,res:Response)=> {adminsStoreController.deleteCouponse(req,res)})
storesAdminRouter.get('/:id',(req:Request , res:Response) =>{adminsStoreController.getCouponse(req,res)})

export default storesAdminRouter;