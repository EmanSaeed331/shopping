import { objectId } from "mongodb-typescript";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    items:objectId,
    userId:objectId,
    totalPrice:Number

})
const cartModel = mongoose.model('cart',cartSchema)
export default cartModel;