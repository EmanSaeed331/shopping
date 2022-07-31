import { Router, Request, Response } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();


orderRouter.post('/',(req:Request,res:Response)=>{orderController.createOrder(req,res)});
orderRouter.patch('/:id',(req:Request,res:Response)=> {orderController.updateOrder(req,res)});
orderRouter.delete('/:id',(req:Request,res:Response)=> {orderController.deleteOrder(req,res)})
orderRouter.post('/login',(req:Request , res:Response) =>{orderController.getOrderById(req,res)})

export default orderRouter;