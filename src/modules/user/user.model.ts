import mongoose , * as Mongoose from "mongoose";
import Joi from 'joi';
import { ObjectId } from "mongodb";
const userSchema = new Mongoose.Schema({
     firstName :Joi.string().alphanum().min(3).max(30).required(),
     lastName:Joi.string().alphanum().min(3).max(30).required(),
     email:Joi.string().email({minDomainSegments:2 , tlds:{'allow':['com','net']}}).required(),
     password:Joi.string().pattern( new RegExp('^[a-zA-Z0-9]{3,30}')),
     wishList:Joi.array().default(null),
     OnlinePayment:ObjectId,
    isActive:Joi.boolean().default(false),
    phone:Joi.number().required(),
    role: Joi.string().default('Customer').required(),
    creditCard:Joi.object({
        cardType:Joi.string().default(null), 
        cardNumber:Joi.number().default(null),
        cardDescription:Joi.string().default(null),
    })
})
const userModel = mongoose.model('User',userSchema)
export default userModel;
