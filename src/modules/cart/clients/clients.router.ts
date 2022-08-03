import { Router, Request, Response } from 'express';
import { clientsController } from './clients.controller';

const cartClientsRouter = Router();


cartClientsRouter.get('/:id',(req:Request , res:Response) =>{clientsController.getCarts(req,res)})

export default cartClientsRouter;