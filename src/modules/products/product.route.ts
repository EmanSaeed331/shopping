import { Router, Request, Response } from 'express';
import { productsController } from './products.controller';

const productRouter = Router();


productRouter.post('/',(req:Request,res:Response)=>{productsController.createProduct(req,res)});
productRouter.patch('/:id',(req:Request,res:Response)=> {productsController.updateProduct(req,res)});
productRouter.delete('/:id',(req:Request,res:Response)=> {productsController.deleteProduct(req,res)})
productRouter.post('/login',(req:Request , res:Response) =>{productsController.getProductById(req,res)})

export default productRouter;