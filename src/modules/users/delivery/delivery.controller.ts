import { Request , Response } from "express";
import { userRepository } from "../user.repositry";

// Create delivery 
const createDelivery = (req:Request , res:Response) => { 
    const data = req.body;
    const delivery = userRepository.signUp(data)
    res.json({'user':delivery});
}

// Read delivery 
const loginDelivery = (req:Request,res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    const delivery = userRepository.login(email,password);
    if(!delivery) res.json({ message:'wrong email or password '});
    res.json({'delivery':delivery})
}
// update delivery 
const updateDelivery = (req:Request, res:Response) => {
    const id = req.params.id;
    const delivery = req.body;
    const updatedelivery = userRepository.updating(id,delivery);
    if(!updatedelivery) res.json({'message':'wrong id '});
    res.json({'delivery':updatedelivery});
}

const deleteDelivery = (req:Request,res:Response) =>{
    const id = req.params.id;
    const deletedelivery = userRepository.deleting(id);
    if (!deletedelivery) res.json({'message':'wrong id'});
    res.json({'deleteddelivery':deletedelivery});
}

export const deliveryController = {
    createDelivery,
    loginDelivery,
    updateDelivery,
    deleteDelivery
}