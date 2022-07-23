import { Router, Request, Response } from 'express';
import { userController } from './user.controller';

const userRouter = Router();

userRouter.get('/',(req:Request , res:Response) => {userController.getUsers(req,res)});
userRouter.post('/',(req:Request , res:Response) => {userController.createUser(req,res)});
userRouter.patch('/',(req:Request,res:Response) =>{userController.updateUser(req,res)})
userRouter.delete('/',(req:Request,res:Response)=>{userController.deleteUser(req,res)});
export default userRouter;