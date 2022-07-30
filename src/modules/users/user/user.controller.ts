// External Dependencies
import { Request, Response, Router } from 'express';
import { userServices } from './user.services';
import {auth} from '../middleware/auth'
import { userRepository } from './user.repositry';


// GET
/*
userRouter.get('/',auth.verifyToken,async(req,res)=>{
   
})

*/ 
const getUsers =async (req:Request,res:Response) =>{
    const users = await userServices.getUsers()
    console.log(`users Controller ${users}`)
    res.json({users:users})
};
// POST
/* userRouter.post('/',async(req,res)=>{

*/ 
const createUser = async(req:Request,res:Response)=>{
    const user = await userServices.createUser(req.body);
    await user.save();
    res.json({user:user})};
   
// PUT
/**userRouter.patch('/:id',auth.verifyToken,async(req,res)=>{
 
}) */
const updateUser = async(req:Request , res:Response)=>{
    const id:any = req.params.id;
    const user:any = await userServices.updateUser(id ,req.body);
    await user.save();  
    res.json({updatedUser:user})
}

// DELETE 
/* userRouter.delete('/:id',auth.verifyToken,async(req,res)=>{
   
})*/ 
const deleteUser = async(req:Request, res:Response)=>{
    const id:any = req.params.id
    await userServices.deleteUser(id)
    res.json({'message':'delete user successfully'})
}
// Demo functions
const readUser =async (req:Request , res:Response)=>{
     const users =  await userRepository.getUSer();
     res.json({'users':users});
}
// Demo Create function 
const creating = async (req:Request , res:Response)=>{
    const user = req.body;
    const createdUser = await userRepository.createU(user);
    await createdUser.save();
    res.json({'createdUser':createdUser});
}


const updating = async(req:Request , res:Response) => {
    const id = req.params.id;
    console.log(`user idddd from updating +${id}`)

    const userBody = req.body;
    console.log(id)
    console.log(userBody)

    const updatedUser = await userRepository.updateU(id,userBody);
    
   if (updatedUser == null ){
    console.log('user not found ')
    return ' user not found ' 
   }
   //await updatedUser.save();
    console.log( updatedUser ) ;

   res.json({'updatedUser' : updatedUser});
   return updatedUser;
}
// deleting 
const deleting = async(req:Request , res:Response)=>{ 
    const id = req.params.id;
    console.log(`user idddd from deleting +${id}`)
    const deletedUser = await userRepository.deleteU(id);
    if (!deletedUser) 
    {   
        res.json({'message':'user not found'})
    }
    res.json({'message':'deleted user '})
}
const getUser =async (req:Request , res:Response) => {
    const email  = req.body.email;
    const password = req.body.password;
    console.log(`email ${email}`);
    console.log(`password ${password}`)
    const user = await userRepository.getUserByEmail(email , password) ;
    console.log(user)
    if (! user) { 
        return 'Email or password is not valid '
    }
    res.json({'user':user});
    return `user ${user}`
}
// Login 
/* userRouter.post('/Login',auth.verifyToken,async(req,res) => {
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
 */
export const  userController = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    readUser,
    creating,
    updating,
    deleting,
    getUser

}