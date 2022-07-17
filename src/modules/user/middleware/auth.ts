import jwt from 'jsonwebtoken';
import {Request, Response , NextFunction} from 'express'
import 'dotenv/config' ;

const verifyToken = (req:Request, res:Response,next:NextFunction) => { 
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token) {
        return res.status(403).send("A token  is required for authentication ");
    }
    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY ||'jsontoken3498');

        req.User = decoded;
    }
    catch(error){
        return res.status(401).send("Invalid Token ");
    }
    return next();
}
export const auth = {verifyToken}