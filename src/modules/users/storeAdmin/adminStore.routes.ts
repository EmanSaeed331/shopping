import { Router, Request, Response } from 'express';
import { adminStoreController } from './adminStore.controller';
const adminStoreRouter = Router();


adminStoreRouter.post('/',(req:Request,res:Response)=>{adminStoreController.createAdmin(req,res)});
adminStoreRouter.patch('/:id',(req:Request,res:Response)=> {adminStoreController.updateAdmin(req,res)});
adminStoreRouter.delete('/:id',(req:Request,res:Response)=> {adminStoreController.deleteAdmin(req,res)})
adminStoreRouter.post('/login',(req:Request , res:Response) =>{adminStoreController.loginAdmin(req,res)})

export default adminStoreRouter;