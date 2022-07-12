import { CreateUser } from "./types";
import userModel from "./user.model";

// create user 
const createUser = async (data:CreateUser)=>{
    let user = await new userModel(data);
    return user ;
}

// get user
const getAllUsers = async()=>{
    let users = await userModel.find({});
    return users; 
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
    deleteUser
}
