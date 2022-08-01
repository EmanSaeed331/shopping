import { Router, Request, Response } from 'express';
import { OrdersController } from './order.controller';

const orderRouter = Router();


orderRouter.post('/',(req:Request,res:Response)=>{OrdersController.createOrders(req,res)});
orderRouter.patch('/:id',(req:Request,res:Response)=> {OrdersController.updateOrders(req,res)});
orderRouter.delete('/:id',(req:Request,res:Response)=> {OrdersController.deleteOrders(req,res)})
orderRouter.post('/login',(req:Request , res:Response) =>{OrdersController.getOrdersById(req,res)})

export default orderRouter;