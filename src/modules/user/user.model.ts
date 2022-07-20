import mongoose , * as Mongoose from "mongoose";
import { ObjectId } from "mongodb";
 //  ! Todo Make schema depend on Joi || make it simple schema with mongoose validation 
const userSchema = new Mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        minLength:4,
    },
     lastName:{
       type:String,
       minLength:4,
     },
     email:{
        type:String, 
        unique:true,
        required:true
    },
     password:{
        type:Number,
        minLength:6,
        required:true
     },
     wishList:[{type:ObjectId , ref:"products"}],
     OnlinePayment:[{type:ObjectId, ref:"cart"}],
     isActive:{
        type:Boolean,
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    // ! Todo : make role as enum  || interface 
    role: {
        type:String,
        enum:['admin','user','storeAdmin','delivery']
    },

     creditCard:{
        cardType:{type:String },
        cardNumber:{type:String},
        cardDescription:{type:String},
    }, 
    // ! db but not in schema .
   // token:Joi.string(),
})
const userModel = mongoose.model('User',userSchema)
export default userModel;
