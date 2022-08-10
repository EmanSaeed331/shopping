import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const productClientsRouter = Router();

productClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getProduct(req,res)})
productClientsRouter.get('/AllProducts/show',(req:Request , res:Response) =>{clientsController.showAllProducts(req,res)})

export default productClientsRouter;