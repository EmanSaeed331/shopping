import { Router, Request, Response } from 'express';
import { deliveryController } from './delivery.controller';
const delivery = Router();


delivery.post('/',(req:Request,res:Response)=>{deliveryController.createAdmin(req,res)});
delivery.patch('/:id',(req:Request,res:Response)=> {deliveryController.updateAdmin(req,res)});
delivery.delete('/:id',(req:Request,res:Response)=> {deliveryController.deleteAdmin(req,res)})
delivery.post('/login',(req:Request , res:Response) =>{deliveryController.loginAdmin(req,res)})

export default delivery;