import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const orderClientsRouter = Router();

orderClientsRouter.post('/',(req:Request,res:Response)=>{clientsController.createOrder(req,res)});
orderClientsRouter.patch('/:id',(req:Request,res:Response)=> {clientsController.updateOrder(req,res)});
orderClientsRouter.delete('/:id',(req:Request,res:Response)=> {clientsController.deleteOrder(req,res)})
orderClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getOrder(req,res)})
orderClientsRouter.get(':/cartId',(req:Request , res:Response) =>{clientsController.checkoutOrder(req,res)})

export default orderClientsRouter;