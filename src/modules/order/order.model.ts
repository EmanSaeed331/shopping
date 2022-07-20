import { objectId } from "mongodb-typescript";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:objectId,
    // !update Cart 
    items:String,
    totalPrice:String, 
    // ! enum 
    // Status : pending - assing by admin ( assingened , dilerved , canceld ) 
    status:String,
    // Add additonal attributes of credit card 
    creditCard:String,
    // ! ref for user 
    deliveryAgentId:ObjectId,
    shippingAddress:{
        city:{},
        street:{},
    } 

})
const orderModel = mongoose.model('Order',orderSchema)
export default orderModel;