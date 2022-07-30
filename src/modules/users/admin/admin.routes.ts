import { Router, Request, Response } from 'express';
import { adminController } from './admin.controller';
const admin = Router();


admin.post('/',(req:Request,res:Response)=>{adminController.createAdmin(req,res)});
admin.patch('/:id',(req:Request,res:Response)=> {adminController.updateAdmin(req,res)});
admin.delete('/:id',(req:Request,res:Response)=> {adminController.deleteAdmin(req,res)})
admin.post('/login',(req:Request , res:Response) =>{adminController.loginAdmin(req,res)})

export default admin;