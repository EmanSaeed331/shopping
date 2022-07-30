import { CreateUser } from "./types";
import { userRepository } from "./user.repositry";

 
const createUser = (data:CreateUser)=>{
    return userRepository.createUser(data);
}

const getUsers = ()=>{
    return userRepository.getAllUsers();
}

const updateUser = (id:CreateUser , data:CreateUser)=>{
    const user = userRepository.updateUSer(id , data);
    return user 
}

const deleteUser = (id:CreateUser)=>{
    return userRepository.deleteUser(id)
}

const loginUser = (email:CreateUser , password:CreateUser)=>{
    return userRepository.login(email , password);
}
export const userServices = { 
    createUser,
    getUsers, 
    updateUser,
    deleteUser,
    loginUser
}