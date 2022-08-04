import jwt from 'jsonwebtoken';
import {Request, Response , NextFunction} from 'express'
import 'dotenv/config' ;
import userModel from '../users/user.model';

const auth = async (req:Request, res:Response,next:NextFunction) => { 
    const token = req.header('Authorization')?.replace('Bearer ', '')
    console.log(`Token From Auth ++++${token}`)
    if(!token) {
        return res.status(403).send("A token  is required for authentication ");
    }
    try{
        const decoded:any =  jwt.verify(token, process.env.TOKEN as string);
        const decodedUser =  await userModel.findOne({_id:decoded._id , role:decoded.role, email:decoded.email,'tokens.token':token});

        req.User  = decoded;
        if(!decodedUser){
             
             res.json({message: "unauthorized" });
            }
        else {
            next()
        }
    }
    catch(error){
        console.log(`Token error+${error}`)
        return res.status(401).send("Invalid Token ");
    }
 
}
export default auth;


