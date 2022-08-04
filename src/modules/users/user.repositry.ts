import { CreateUser, User } from "./client/types";
import userModel from "./user.model";
import { crud } from "../../CRUD/crud";
import bcrypt from 'bcrypt';


const signUp = async(data:CreateUser)=>{
  const user =  await crud.create({data},userModel);
  return user;
}
const login = async (email:string , password:string)=>{

 /*  console.log(` Email .. ${email} + Password .. ${ password }`)
  const user = await  crud.get({email , password} , userModel);
  return user; */

  try {
    const foundUser:any = await userModel.findOne({email});
 
    if (!foundUser) {
      throw new Error('Name of user is not correct');
    }
 
    const isMatch = bcrypt.compareSync(password,foundUser.password);
 
    if (isMatch) {
 return foundUser 
    } else {
      throw new Error('Password is not correct');
    }
  } catch (error) {
    throw error;
  }
}

const updating = async(id:string)=>{
    const user =await crud.update(id , User , userModel) ; 
    if (!user) { 
     console.log('user Not found')
     return ' User not found '
    }
  
    return user; }

const deleting = async(id:string)=>{

  const user =await  crud.remove(id , userModel) ;
  if ( !user) { 
    console.log('user not deleted')
  }
  console.log('user deleted')
 
  return user;
}


export const userRepository = { 
  
   signUp,
   login,
   updating,
   deleting
    
}
