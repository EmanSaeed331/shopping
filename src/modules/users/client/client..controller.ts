import { Request , Response } from "express";
import { crud } from "../../../CRUD/crud";
import { activationMsg } from "../activation";
import { userRepository } from "../user.repositry";
import {uploader} from '../../../utils/api_auth_util'
import userModel from "../user.model";

// Create Client 
const createClient = async (req:Request , res:Response) => { 
    const data = req.body
    const email = req.body.email;
    const name = req.body.firstName;
    console.log(`Data ${data}`);
    const client = await userRepository.signUp(data);

    const token = await client.generateAuthToken()
    
    console.log(`client ${client}`);
    activationMsg(email,name,token);

    res.json({'Client':client , 'token':token});
}

// Read Client 
const loginClient =async ( req:Request,res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    const client = await userRepository.login(email,password);
    if(!client) {throw Error}
    return res.json({'Client':client})
}
// update Client 
const updateClient = async (req:Request, res:Response) => {
    const id = req.params.id;
    const client = req.body;
    const updateClient =await  userRepository.updating(id,client);
    //const result:any = await uploader(req);
   // const user= await crud.get(id,  {$set: {profileImage: result.url}});
    if(!updateClient) res.json({'message':'wrong id '});

 //   if (!req.file) return res.status(200).json({user: user, message: 'User has been updated'});

    res.json({'Client':updateClient});
}

const deleteClient = async(req:Request,res:Response) =>{
    const id = req.params.id;
    const deletedClient = await userRepository.deleting(id);
    if (!deletedClient) res.json({'message':'wrong id'});
    res.json({'message':'deleted successfully '});
}
const readProfile =async  (req:Request , res:Response)=>{
    const user = await userRepository.reading();
    console.log(`user++ ${user}`)
    res.json({'user':user})
}
export const clientController = {
    createClient,
    updateClient,
    deleteClient,
    loginClient,
    readProfile
}