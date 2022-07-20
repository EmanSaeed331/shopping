import mongoose , * as Mongoose from "mongoose";

const storeSchema = new Mongoose.Schema({
   storeName:String,
   about:String,
   // ! enum -- as stars 1~5 as value 
   rating:Number,
   // ! enum -- 
   category:String,
   // ! [{user}]
   admins:[{}],
})
const storeModel = mongoose.model('store',storeSchema)
export default storeModel;