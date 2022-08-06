import { CreateUser} from "./client/types";
import userModel from "./user.model";
import { crud } from "../../CRUD/crud";
import bcrypt from 'bcrypt';
import {sendVerificationEmail} from'./auth.controller';


const signUp = async(data:CreateUser)=>{
  const user =  await crud.create(data,userModel);
  return user;
}
const login = async (email:string , password:string)=>{

 /*  console.log(` Email .. ${email} + Password .. ${ password }`)
  const user = await  crud.get({email , password} , userModel);
  return user; */

  try {
    const foundUser:any = await userModel.findOne({email});
 
    if (!foundUser) {
      throw new Error('Email of client is not correct');
    }
 
    const isMatch = bcrypt.compareSync(password,foundUser.password);
 
    if (isMatch) {
 return foundUser 
    } else {
      throw new Error('Password is not correct');
    }
  } catch (error) {
    console.log(`errorrr++${error}`)
  }
}

const updating = async(id:string , data:CreateUser)=>{
    const user =await crud.update(id , data , userModel) ; 
    if (!user) { 
     console.log('user Not found')
     return ' User not found '
    }

    console.log(`${user}`)
    return user; }

const deleting = async(id:string)=>{

  const user =await  crud.remove(id , userModel) ;
  if ( !user) { 
    console.log('user not deleted')
  }
  console.log('user deleted')
 
  return user;
}

const reading = async()=>{
  const user =await  crud.read(userModel);
  return user ;
}

// !Todo : 1- reset Password 
// !Todo : 2- Resend Verification Token
export const userRepository = { 
  
   signUp,
   login,
   updating,
   deleting,
   reading
    
}
