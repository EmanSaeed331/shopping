import { objectId } from "mongodb-typescript";
import mongoose from "mongoose";

const couponseSchema = new mongoose.Schema({
  //user:refId 

})
const couponseModel = mongoose.model('product',couponseSchema)
export default couponseModel;