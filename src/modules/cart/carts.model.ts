import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    items:
        [{
          products: {type:ObjectId, ref: "Products"  },
          price: {type:Number},
          quantity:{type:Number},
          total:{type:Number}
        }]
    ,
    userId:{type:ObjectId,ref:'User'},
    coupon: {type:ObjectId,ref:'coupon'}, 
    totalPrice:Number,
    totalPriceAfterDiscount: Number,

})
const cartsModel = mongoose.model('Cart',cartSchema)
export default cartsModel;

