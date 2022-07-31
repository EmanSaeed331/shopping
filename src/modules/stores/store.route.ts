import { Router, Request, Response } from 'express';
import { storeController } from './store.controller';

const storeRouter = Router();


storeRouter.post('/',(req:Request,res:Response)=>{storeController.createStore(req,res)});
storeRouter.patch('/:id',(req:Request,res:Response)=> {storeController.updateStore(req,res)});
storeRouter.delete('/:id',(req:Request,res:Response)=> {storeController.deleteStore(req,res)})
storeRouter.post('/login',(req:Request , res:Response) =>{storeController.getStoreById(req,res)})

export default storeRouter;