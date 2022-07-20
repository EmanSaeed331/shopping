import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const couponseSchema = new mongoose.Schema({
  //user:refId 
  ownerStore:{type:ObjectId , ref:'User'},
  codeNumber:{type:Number},
  quantity:{type:Number},
  valueOfDiscount:{type:Number},
  cartId:{type:ObjectId,ref:'Cart'}

})
const couponseModel = mongoose.model('Coupon',couponseSchema)
export default couponseModel;