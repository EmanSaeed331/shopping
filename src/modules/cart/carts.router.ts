import { Router, Request, Response } from 'express';
import { cartesController } from './carts.controller';

const cartsRouter = Router();


cartsRouter.post('/',(req:Request,res:Response)=>{cartesController.createCarts(req,res)});
cartsRouter.patch('/:id',(req:Request,res:Response)=> {cartesController.updateCarts(req,res)});
cartsRouter.delete('/:id',(req:Request,res:Response)=> {cartesController.deleteCarts(req,res)})
cartsRouter.post('/:id',(req:Request , res:Response) =>{cartesController.getCartsById(req,res)})

export default cartsRouter;