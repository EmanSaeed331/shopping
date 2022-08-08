import mongoose , * as Mongoose from "mongoose";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as crypto from "crypto";
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
        enum:['admin','client','storeAdmin','delivery'],
        required: true,
    },

     creditCard:{
        cardType:{type:String },
        cardNumber:{type:Number},
        cardDescription:{type:String},
    },

    profileImage: {
        type: String,
        required: false,
        max: 255
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    resetPasswordToken: {
        type: String,
        required: false
    },

    resetPasswordExpires: {
        type: Date,
        required: false
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});
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
    const payload = { _id: user._id, role:user.role , email:user.email};

    const token = jwt.sign(payload, process.env.TOKEN as string , {
        expiresIn: '10h'
    }) ; 
    user.tokens = await user.tokens.concat({token})
    await user.save()
    return token
};

userSchema.methods.generatePasswordReset = function() {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
   
};

userSchema.methods.generateVerificationToken = function ()  {
    const payload = {
        id : this._id,
        token:crypto.randomBytes(20).toString('hex')
    }
    const token = jwt.sign(payload, process.env.TOKEN as string , {
        expiresIn: '10h'
    }) ; 
    return token ; 
}
const userModel = mongoose.model('User',userSchema)
export default userModel;
