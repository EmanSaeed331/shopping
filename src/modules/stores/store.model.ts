import mongoose , * as Mongoose from "mongoose";
import { ObjectId } from "mongodb";

const storeSchema = new Mongoose.Schema({
   storeName:String,
   about:String,
   // ! enum -- as stars 1~5 as value 
   rating:{
      type:Number , 
      enum:[0,1,2,3,4,5]
   },
   // ! enum -- 
   category:{
      type:ObjectId,
      ref:'products'
   },
   admins:[{type:ObjectId , ref:'User'}],
})
const storeModel = mongoose.model('Store',storeSchema)
export default storeModel;