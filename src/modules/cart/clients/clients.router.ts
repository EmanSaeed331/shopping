import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const storeClientsRouter = Router();


storeClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getCarts(req,res)})

export default storeClientsRouter;