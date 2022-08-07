import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const orderSchema = new mongoose.Schema({
    userId:{type:ObjectId,ref:"User"},
 
    items:{type:ObjectId , ref:'Cart.items'},
    totalPrice:{type:Number}, 
   
    status:{type:String,enum:['pending','assigned','delivered','canceled']},
    creditCard:{
        cardType:{type:String },
        cardNumber:{type:String},
        cardDescription:{type:String},
    },  
    deliveryAgentId:{type:ObjectId,ref:'User'},
    shippingAddress:{
        city:{type:String},
        street:{type:String},
    } 
});
const ordersModel = mongoose.model('Order',orderSchema);
export default ordersModel;