import { Router, Request, Response } from 'express';
import { adminController } from './admin.controller';
const adminRouter = Router();


adminRouter.post('/signup',(req:Request,res:Response)=>{adminController.createAdmin(req,res)});
adminRouter.patch('/:id',(req:Request,res:Response)=> {adminController.updateAdmin(req,res)});
adminRouter.delete('/:id',(req:Request,res:Response)=> {adminController.deleteAdmin(req,res)})
adminRouter.post('/signin',(req:Request , res:Response) =>{adminController.loginAdmin(req,res)})

export default adminRouter;