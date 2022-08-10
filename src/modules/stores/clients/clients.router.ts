import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const storeClientsRouter = Router();


storeClientsRouter.get('/readStore/:id',(req:Request , res:Response) =>{clientsController.getStore(req,res)})
storeClientsRouter.get('/allStores',(req:Request , res:Response) =>{clientsController.showAllStores(req,res)})
export default storeClientsRouter;