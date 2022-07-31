import { Router, Request, Response } from 'express';
import { cartController } from './carts.controller';

const cartsRouter = Router();


cartsRouter.post('/',(req:Request,res:Response)=>{cartController.createCart(req,res)});
cartsRouter.patch('/:id',(req:Request,res:Response)=> {cartController.updateCart(req,res)});
cartsRouter.delete('/:id',(req:Request,res:Response)=> {cartController.deleteCart(req,res)})
cartsRouter.post('/login',(req:Request , res:Response) =>{cartController.getCartById(req,res)})

export default cartsRouter;