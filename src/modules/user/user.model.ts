import mongoose , * as Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    firstName :String,
    lastName:String,
    email:String,
    password:String,
    whishList:String,
    creditCard:String,
    isActive:Boolean,
    OnlinePayment:String,
    Phone:Number
})
const userModel = mongoose.model('User',userSchema)
export default userModel;