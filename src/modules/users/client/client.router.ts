import { Router, Request, Response } from 'express';
import multer from 'multer';
import auth from '../../middleware/auth';
import { clientController } from './client..controller';
const upload = multer().single('profileImage');

const userRouter = Router();

userRouter.post('/signin',auth,(req:Request,res:Response)=>{clientController.loginClient(req,res)});
userRouter.post('/signup',(req:Request,res:Response)=>{clientController.createClient(req,res)});
userRouter.patch('/:id',auth,(req:Request,res:Response)=> {clientController.updateClient(req,res)});
userRouter.patch('/:id',auth,upload,(req:Request,res:Response)=> {clientController.updateClient(req,res)});
userRouter.delete('/:id',auth,(req:Request,res:Response)=> {clientController.deleteClient(req,res)})
userRouter.get('/profile' ,(req:Request,res:Response)=> {clientController.readProfile(req,res)})


export default userRouter;