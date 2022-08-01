import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    
    items:{type:ObjectId , ref:'Order.items'},
    userId:{type:ObjectId,ref:'User'},
    coupon: {type:ObjectId,ref:'coupon'}, 
    totalPrice:Number

})
const cartsModel = mongoose.model('Cart',cartSchema)
export default cartsModel;

