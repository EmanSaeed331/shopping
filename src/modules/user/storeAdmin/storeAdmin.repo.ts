import storeAdminModel from "./storeAdmin.model";
import { CreateAdmin } from "./types";

 //   ! 1- Create user account 
const createAdmin = async (data:CreateAdmin)=>{
    const admin = new storeAdminModel(data);
    return admin ;
}

const signIn = async( email:CreateAdmin, password:CreateAdmin)=>{
    const admin = await storeAdminModel.findOne({email,password});
    if (!admin){
        return ' Invalid email or password ';
    }
    return admin;
}

const updateAdmin = async(id:CreateAdmin,data:CreateAdmin)=>{
    const admin = await storeAdminModel.findByIdAndUpdate({id,data});
    if(!admin)
    {
        return 'admin is not valid';
    }
    return admin;
}
const deleteAdmin = async (id:CreateAdmin)=>{
    return  await storeAdminModel.findOneAndDelete({id});

}
export const adminRepo = { 
    createAdmin , 
    signIn,
    updateAdmin,
    deleteAdmin
}



