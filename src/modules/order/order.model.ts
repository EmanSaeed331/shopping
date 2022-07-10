import { objectId } from "mongodb-typescript";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:objectId,
    items:String,
    totalPrice:String, 
    status:String,
    creditCard:String,
    deliveryAgentId:String,
    shippingAddress:String 

})
const orderModel = mongoose.model('Order',orderSchema)
export default orderModel;