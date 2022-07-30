
import { Request , Response } from "express";
import { crud } from "../../../CRUD/crud";
import { User } from "../user/types";
import userModel from "../user/user.model";

// Create admin 
const createAdmin = (req:Request , res:Response) => { 
    const user =  crud.create(User,userModel);
    res.json({'user':user});
}

// read   All Users 
/* const readAdmin = (req:Request , res:Response) => {
    return crud.read(userModel) 
} */
// update admin 
const updateAdmin =async (req:Request, res:Response) => { 
    const id = req.params.id;
    const admin =await crud.update(id , User , userModel) ; 
    if (!admin) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'admin':admin});
    return admin; }
// delete admin 
const deleteAdmin = async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedAdmin =await  crud.remove(id , userModel) ;
    if ( !deletedAdmin) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Admin deleted'})
    return deletedAdmin;
}

const loginAdmin = async (req:Request,res:Response) => { 
        const email = req.body.email;
        const password = req.body.password;
        console.log(` Email .. ${email} + Password .. ${ password }`)
        const user = await  crud.getByemail(email , password , userModel);
        res.json({'LoggedIn User ':user})
}
export const adminStoreController = {
    createAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin
}