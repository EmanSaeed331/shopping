import { CreateUser } from "./types";
import { userRepository } from "./user.repositry";

 
const createUser = (data:CreateUser)=>{
    return userRepository.createUser(data);
}

const getUsers = ()=>{
    return userRepository.getAllUsers();
}

const updateUser = (id:CreateUser , data:CreateUser)=>{
    let user = userRepository.updateUSer(id , data);
    return user 
}

const deleteUser = (id:CreateUser)=>{
    return userRepository.deleteUser(id)
}

export const userServices = { 
    createUser,
    getUsers, 
    updateUser,
    deleteUser
}