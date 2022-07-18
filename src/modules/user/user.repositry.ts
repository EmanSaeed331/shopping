import { CreateUser } from "./types";
import userModel from "./user.model";
import jwt from 'jsonwebtoken';
// create user 
const createUser = async (data:CreateUser)=>{
    let user = await new userModel(data);
    // Create token
    console.log(user.id , user.email);
    const token:any  = jwt.sign(
        { id: user.id , email:user.email },
        process.env.TOKEN_KEY ||'jsontoken3498',
       
      );
      // save user token
      user.token = token ; 
    return user ;
}

// get user
const getAllUsers = async()=>{
    let users = await userModel.find({});
    return users; 
}

// Login 
const login = async (email:CreateUser , password:CreateUser)=>{
    try{
        let user  = await userModel.findOne({email ,password}).exec();
        if (!user) { 
            return 'Invalid Mail or Password ' ;
        }
        const token:any  = jwt.sign(
            { id: user.id , email:user.email },
            process.env.TOKEN_KEY ||'jsontoken3498',
            {
                expiresIn:'2h',
            }
           
          );
        
          console.log(user.id , user.email);

          // save user token
          user.token = token ; 
        return user;
    } 
    catch(error) {
        return `error in Login ${error}`
    }
    
}
// update user 
const updateUSer = async (id:CreateUser , data:CreateUser)=>{
    let user = await userModel.findByIdAndUpdate(id,data);
    if (!user) {
        return 'user not found '
    }
    //user.save();
    return user; 
  
    
    };

// delete user 
const deleteUser = async (id:CreateUser)=>{
    return  await userModel.findOneAndDelete({id});
}


export const userRepository = { 
    createUser , 
    getAllUsers,
    updateUSer,
    deleteUser,
    login
}
