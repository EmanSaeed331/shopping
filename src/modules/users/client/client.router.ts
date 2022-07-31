import { Router, Request, Response } from 'express';
import { clientController } from './client..controller';

const userRouter = Router();

userRouter.get('/',(req:Request,res:Response)=>{clientController.loginClient(req,res)});
userRouter.post('/',(req:Request,res:Response)=>{clientController.createClient(req,res)});
userRouter.patch('/:id',(req:Request,res:Response)=> {clientController.updateClient(req,res)});
userRouter.delete('/:id',(req:Request,res:Response)=> {clientController.deleteClient(req,res)})



export default userRouter;