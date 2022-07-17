// External Dependencies
import { Router } from 'express';
import { userServices } from './user.services';
import {auth} from './middleware/auth'

const userRouter = Router();

// GET
userRouter.get('/',auth.verifyToken,async(req,res)=>{
    let users = await userServices.getUsers()
    console.log(`users Controller ${users}`)
    res.json({users:users})
});
// POST
userRouter.post('/',async(req,res)=>{
    let user = await userServices.createUser(req.body);
    await user.save();
    res.json({user:user})
})
// PUT
userRouter.patch('/:id',async(req,res)=>{
    let id:any = req.params.id;
    let user:any = await userServices.updateUser(id ,req.body);
    await user.save();  
    res.json({updatedUser:user})
})
// DELETE 

userRouter.delete('/:id',async(req,res)=>{
    let id:any = req.params.id
    await userServices.deleteUser(id)
    res.json({'message':'delete user successfully'})
})

export default userRouter;