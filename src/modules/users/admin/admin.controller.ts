import { Request , Response } from "express";
import { userRepository } from "../user.repositry";


// Create Admin 
const createAdmin =async (req:Request , res:Response) => { 
    const data = req.body;
    const admin = await userRepository.signUp(data)
    res.json({'user':admin});
}

// Read Admin 
const loginAdmin =async  (req:Request,res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    const admin = await userRepository.login(email,password);
    if(!admin) res.json({ message:'wrong email or password '});
    res.json({'Admin':admin})
}
// update Admin 
const updateAdmin = async (req:Request, res:Response) => {
    const id = req.params.id;
    const admin = req.body;

    const updateAdmin = await userRepository.updating(id,admin);
    if(!updateAdmin) res.json({'message':'wrong id '});
    res.json({'Admin':updateAdmin});
}

const deleteAdmin = async (req:Request,res:Response) =>{
    const id = req.params.id;
    const deleteAdmin = await userRepository.deleting(id);
    if (!deleteAdmin) res.json({'message':'wrong id'});
    res.json({'deletedAdmin':deleteAdmin});
}

export const adminController = {
    createAdmin,
    loginAdmin,
    updateAdmin,
    deleteAdmin
}