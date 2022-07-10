import { objectId } from "mongodb-typescript";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:String,
    productDescription:String,
    price:Number,
    discount:Number,
    storeId:objectId,
    image:String,
    category:String,
    quantity:Number,

})
const productModel = mongoose.model('product',productSchema)
export default productModel;