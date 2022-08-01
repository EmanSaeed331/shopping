import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const orderSchema = new mongoose.Schema({
    userId:{type:ObjectId,ref:"User"},
    // !update Cart 
    items:[
        {
          product: {type:ObjectId, ref: "Products" },
          price: Number,
          quantity: Number,
          total: Number
        }
    ],
    totalPrice:{type:Number}, 
    // ! enum 
    // Status : pending - assing by admin ( assingened , dilerved , canceld ) 
    status:{type:String,enum:['pending','assigned','delivered','canceled']},
    // Add additonal attributes of credit card 
    creditCard:{
        cardType:{type:String },
        cardNumber:{type:String},
        cardDescription:{type:String},
    },     // ! ref for user 
    deliveryAgentId:{type:ObjectId,ref:'User'},
    shippingAddress:{
        city:{type:String},
        street:{type:String},
    } 
});
const ordersModel = mongoose.model('Order',orderSchema);
export default ordersModel;