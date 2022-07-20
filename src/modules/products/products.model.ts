import { ObjectId } from "mongodb";
import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName:{type:String},
    productDescription:{type:String},
    price:{type:Number},
    discount:{type:Number},
    // ! refrence for store 
    storeId:{type:ObjectId,ref:'Store'},
    image:{type:String},
    category:{type:String, enum:['Electronics','Clothing, Shoes, and Jewelry','Home and Kitchen','Beauty and Personal Care','Books','Pet Supplies','Sports and Outdoors']},
    quantity:{type:Number},

});
const productModel = mongoose.model('Products',productSchema)
export default productModel;