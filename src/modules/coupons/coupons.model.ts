import { objectId } from "mongodb-typescript";
import mongoose from "mongoose";

const couponseSchema = new mongoose.Schema({
    productName:String,
    productDescription:String,
    price:Number,
    discount:Number,
    storeId:objectId,
    image:String,
    category:String,
    quantity:Number,

})
const couponseModel = mongoose.model('product',couponseSchema)
export default couponseModel;