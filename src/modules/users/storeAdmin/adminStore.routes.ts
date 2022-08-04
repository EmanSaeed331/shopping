import { Router, Request, Response } from 'express';
import auth from '../../middleware/auth';
import { adminStoreController } from './adminStore.controller';
const adminStoreRouter = Router();


adminStoreRouter.post('/signup',(req:Request,res:Response)=>{adminStoreController.createAdmin(req,res)});
adminStoreRouter.patch('/:id',auth,(req:Request,res:Response)=> {adminStoreController.updateAdmin(req,res)});
adminStoreRouter.delete('/:id',auth,(req:Request,res:Response)=> {adminStoreController.deleteAdmin(req,res)})
adminStoreRouter.post('/signin',auth,(req:Request , res:Response) =>{adminStoreController.loginAdmin(req,res)})

export default adminStoreRouter;