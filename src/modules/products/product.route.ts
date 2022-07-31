import { Router, Request, Response } from 'express';
import { productController } from './products.controller';

const productRouter = Router();


productRouter.post('/',(req:Request,res:Response)=>{productController.createProduct(req,res)});
productRouter.patch('/:id',(req:Request,res:Response)=> {productController.updateProduct(req,res)});
productRouter.delete('/:id',(req:Request,res:Response)=> {productController.deleteProduct(req,res)})
productRouter.post('/login',(req:Request , res:Response) =>{productController.getProductById(req,res)})

export default productRouter;