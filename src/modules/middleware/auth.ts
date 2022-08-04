import jwt from 'jsonwebtoken';
import {Request, Response , NextFunction} from 'express'
import 'dotenv/config' ;
import userModel from '../users/user.model';

const verifyToken = async (req:Request, res:Response,next:NextFunction) => { 
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token) {
        return res.status(403).send("A token  is required for authentication ");
    }
    try{
        const decoded:any = jwt.verify(token, process.env.TOKEN_KEY ||'jsontoken3498');
        const decodedUser =  await userModel.findOne({_id:decoded._id , role:decoded.role, 'tokens.token':token});

        req.User  = decoded;
        if(decodedUser){ next()}
        else {
            res.json({message: "unauthorized" });
        }
    }
    catch(error){
        return res.status(401).send("Invalid Token ");
    }
    return next();
}
export const auth = {verifyToken}


