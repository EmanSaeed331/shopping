import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const orderClientsRouter = Router();


orderClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getOrder(req,res)})

export default orderClientsRouter;