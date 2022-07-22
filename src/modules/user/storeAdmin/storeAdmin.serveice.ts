import { adminRepo } from "./storeAdmin.repo";
import { CreateAdmin } from "./types";

const signUp = (data:CreateAdmin) =>{
    return adminRepo.createAdmin(data);}

const login = (email:CreateAdmin , password:CreateAdmin)=>{
    return adminRepo.signIn(email,password);}

const update = (id:CreateAdmin , data:CreateAdmin)=>{
    return adminRepo.updateAdmin(id,data);}

const deleting= (id:CreateAdmin)=>{
    return adminRepo.deleteAdmin(id);
}
// update Admin 
// delete Admin 

export const storeAdminServ ={
    signUp,
    login,
    update,
    deleting
}