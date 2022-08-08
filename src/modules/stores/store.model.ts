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
   category:{
      type:ObjectId,
      ref:'products'
   },
   admins:[{type:ObjectId , ref:'User', required:true}],
})
const storeModel = mongoose.model('Store',storeSchema)
export default storeModel;