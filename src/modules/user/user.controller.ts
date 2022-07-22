// External Dependencies
import { Router } from 'express';
import { userServices } from './user.services';
import {auth} from './middleware/auth'

const userRouter = Router();

// GET
userRouter.get('/',auth.verifyToken,async(req,res)=>{
    const users = await userServices.getUsers()
    console.log(`users Controller ${users}`)
    res.json({users:users})
});
// POST
userRouter.post('/',async(req,res)=>{
    const user = await userServices.createUser(req.body);
    await user.save();
    res.json({user:user})
})
// PUT
userRouter.patch('/:id',auth.verifyToken,async(req,res)=>{
    const id:any = req.params.id;
    const user:any = await userServices.updateUser(id ,req.body);
    await user.save();  
    res.json({updatedUser:user})
})
// DELETE 

userRouter.delete('/:id',auth.verifyToken,async(req,res)=>{
    const id:any = req.params.id
    await userServices.deleteUser(id)
    res.json({'message':'delete user successfully'})
})

// Login 
userRouter.post('/Login',auth.verifyToken,async(req,res) => {
    try{
    const email =req.body.email;
    const password =req.body.password;
    const user = await userServices.loginUser(email,password);
    res.json({user})
    }
    catch(error){
        res.json({'message':error})

    }

})

export default userRouter;