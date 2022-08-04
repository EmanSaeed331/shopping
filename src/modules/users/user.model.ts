import mongoose , * as Mongoose from "mongoose";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config' ;

const userSchema = new Mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        minLength:4,
    },
     lastName:{
       type:String,
       minLength:4,
     },
     email:{
        type:String, 
        unique:true,
        required:true
    },
     password:{
        type:String,
        minLength:6,
        required:true
     },
     wishList:[{type:ObjectId , ref:"products"}],
     onlinePayment:[{type:ObjectId, ref:"cart"}],
     isActive:{
        type:Boolean,
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    role: {
        type:String,
        enum:['admin','user','storeAdmin','delivery']
    },

     creditCard:{
        cardType:{type:String },
        cardNumber:{type:Number},
        cardDescription:{type:String},
    }, 
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]})
const saltRounds = 8

userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user:any = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, saltRounds) ;
    }
    next();
   });

   userSchema.methods.generateAuthToken = async function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user:any = this;
    const token = jwt.sign({ _id: user._id, role:user.role , email:user.email}, process.env.TOKEN as string)
    user.tokens = await user.tokens.concat({token})
    await user.save()
    return token
}
const userModel = mongoose.model('User',userSchema)
export default userModel;


