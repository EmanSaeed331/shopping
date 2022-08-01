import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const storeClientsRouter = Router();


storeClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getStore(req,res)})

export default storeClientsRouter;