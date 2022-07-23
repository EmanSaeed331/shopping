import mongoose , * as Mongoose from "mongoose";
import { ObjectId } from "mongodb";
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
     //! it must be on cart , user must have just one cart . 
     onlinePayment:[{type:ObjectId, ref:"cart"}],
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
    token:{type:String}
})
const userModel = mongoose.model('User',userSchema)
export default userModel;


// ! TOdo --> add product to wish List , remove wishList  ( Add to repo )
// ! Bcrypt for password Presave