import { Request , Response } from "express";
import { userRepository } from "../user.repositry";

// Create Client 
const createClient = (req:Request , res:Response) => { 
    const data = req.body
    const Client = userRepository.signUp(data)
    res.json({'user':Client});
}

// Read Client 
const loginClient = (req:Request,res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    const Client = userRepository.login(email,password);
    if(!Client) res.json({ message:'wrong email or password '});
    res.json({'Client':Client})
}
// update Client 
const updateClient = (req:Request, res:Response) => {
    const id = req.params.id;
    const updateClient = userRepository.updating(id);
    if(!updateClient) res.json({'message':'wrong id '});
    res.json({'Client':updateClient});
}

const deleteClient = (req:Request,res:Response) =>{
    const id = req.params.id;
    const deletedClient = userRepository.deleting(id);
    if (!deleteClient) res.json({'message':'wrong id'});
    res.json({'deletedClient':deletedClient});
}
export const clientController = {
    createClient,
    updateClient,
    deleteClient,
    loginClient
}