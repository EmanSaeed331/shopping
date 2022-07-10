import mongoose , * as Mongoose from "mongoose";

const storeSchema = new Mongoose.Schema({
   storeName:String,
   about:String,
   rating:Number,
   category:String,
   admins:String,
})
const storeModel = mongoose.model('store',storeSchema)
export default storeModel;