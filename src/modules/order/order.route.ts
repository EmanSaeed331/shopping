import { Router, Request, Response } from 'express';
import { ordersController } from './order.controller';

const orderRouter = Router();


orderRouter.post('/',(req:Request,res:Response)=>{ordersController.createOrders(req,res)});
orderRouter.patch('/:id',(req:Request,res:Response)=> {ordersController.updateOrders(req,res)});
orderRouter.delete('/:id',(req:Request,res:Response)=> {ordersController.deleteOrders(req,res)})
orderRouter.post('/login',(req:Request , res:Response) =>{ordersController.getOrdersById(req,res)})

export default orderRouter;