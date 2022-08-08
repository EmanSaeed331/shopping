import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const cartClientsRouter = Router();

cartClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getCarts(req,res)});
cartClientsRouter.post('/:id',(req:Request , res:Response) =>{clientsController.addProductToCart(req,res)});
cartClientsRouter.put('/:id',(req:Request,res:Response)=> {clientsController.applyCoupon(req,res)});
cartClientsRouter.delete('/:itemId',(req:Request,res:Response)=>{clientsController.removeItemsfromCart(req,res)});

export default cartClientsRouter;