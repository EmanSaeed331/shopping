import mongoose , * as Mongoose from "mongoose";
import { ObjectId } from "mongodb";
const adminSchema = new Mongoose.Schema({
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
   
    phone:{
        type:Number,
        unique:true,
        required:true
    },
  
  
})
// Virtual relation  
adminSchema.virtual('Store',{
    ref:'Store',
    localField:'_id',
    foreignField:'User',
  })
const storeAdminModel = mongoose.model('Admin',adminSchema)
export default storeAdminModel;
