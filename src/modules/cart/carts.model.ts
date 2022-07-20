import { objectId } from "mongodb-typescript";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    
    items:objectId,
    // ! refrence 
    userId:objectId,
    // ! refrence 
    coupoun: objectId , 
    totalPrice:Number

})
const cartModel = mongoose.model('cart',cartSchema)
export default cartModel;

// ! Update:Items 
/*
items: [
      {
        product: { type: db.SchemaTypes.ObjectId, ref: "Meal" },
        price: Number,
        quantity: Number,
        total: Number
      },

*/ 