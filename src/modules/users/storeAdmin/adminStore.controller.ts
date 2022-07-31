import { Request , Response } from "express";
import { userRepository } from "../user.repositry";

// Create admin 
const createAdmin = (req:Request , res:Response) => { 
    const data = req.body
    const admin = userRepository.signUp(data)
    res.json({'user':admin});
}

// Read admin 
const loginAdmin = (req:Request,res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    const admin = userRepository.login(email,password);
    if(!admin) res.json({ message:'wrong email or password '});
    res.json({'admin':admin})
}
// update admin 
const updateAdmin = (req:Request, res:Response) => {
    const id = req.params.id;
    const updateAdmin = userRepository.updating(id);
    if(!updateAdmin) res.json({'message':'wrong id '});
    res.json({'admin':updateAdmin});
}

const deleteAdmin = (req:Request,res:Response) =>{
    const id = req.params.id;
    const deletedAdmin = userRepository.deleting(id);
    if (!deleteAdmin) res.json({'message':'wrong id'});
    res.json({'deletedAdmin':deletedAdmin});
}
/* const updateAdmin12 =async (req:Request, res:Response) => { 
    const id = req.params.id;
    const admin =await crud.update(id , User , userModel) ; 
    if (!admin) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'admin':admin});
    return admin; }
// delete admin 
const deleteAdmin12 = async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedAdmin =await  crud.remove(id , userModel) ;
    if ( !deletedAdmin) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Admin deleted'})
    return deletedAdmin;
} */

/* const loginAdmin = async (req:Request,res:Response) => { 
        const email = req.body.email;
        const password = req.body.password;
        console.log(` Email .. ${email} + Password .. ${ password }`)
        const user = await  crud.getByemail(email , password , userModel);
        res.json({'LoggedIn User ':user})
} */
export const adminStoreController = {
    createAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin
}