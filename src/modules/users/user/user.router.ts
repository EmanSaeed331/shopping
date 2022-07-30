import { Router, Request, Response } from 'express';
import { userController } from './user.controller';

const userRouter = Router();

userRouter.get('/',(req:Request,res:Response)=>{userController.readUser(req,res)});
userRouter.post('/',(req:Request,res:Response)=>{userController.creating(req,res)});
userRouter.patch('/:id',(req:Request,res:Response)=> {userController.updating(req,res)});
userRouter.delete('/:id',(req:Request,res:Response)=> {userController.deleting(req,res)})
userRouter.post('/login',(req:Request , res:Response) =>{userController.getUser(req,res)})
// demo Router
    /* 
    userRouter.get('/',(req:Request , res:Response) => {userController.getUsers(req,res)});
    userRouter.post('/',(req:Request , res:Response) => {userController.createUser(req,res)});
    userRouter.patch('/',(req:Request,res:Response) =>{userController.updateUser(req,res)})
    userRouter.delete('/',(req:Request,res:Response)=>{userController.deleteUser(req,res)});
  */

export default userRouter;