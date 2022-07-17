import mongoose , * as Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        },
    lastName:{type:String,required:true},
    email:{type:String, required:true},
    password:{type:String,required:true,minLength:6},
    whishList:{type:[String] , default:null},
    OnlinePayment:{type:mongoose.Schema.Types.ObjectId},
    isActive:{type:Boolean , default:false},
    creditCard:{type:{
        cardType:{type:String},
        cardNumber:{type:Number},
        cardDescription:{type:String}
    } },
    Phone:{type:Number,required:true},
    role: {type:String , default:'Customer' , required:true } ,
})
const userModel = mongoose.model('User',userSchema)
export default userModel;
