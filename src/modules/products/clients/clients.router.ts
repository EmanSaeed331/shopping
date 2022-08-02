import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const productClientsRouter = Router();


productClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getProduct(req,res)})

export default productClientsRouter;