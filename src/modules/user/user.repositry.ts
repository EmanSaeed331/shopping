import { CreateUser } from "./types";
import userModel from "./user.model";
import jwt from 'jsonwebtoken';
// create user 
// ! todo 
// Change name of function 
// change type of data --> to be generic 
const createUser = async (data:CreateUser)=>{
    const user = await new userModel(data);
    // Create token
    console.log(user.id , user.email);
    const token:any  = jwt.sign(
        { id: user.id , email:user.email },
        process.env.TOKEN_KEY ||'jsontoken3498',
       
      );
      // save user token
      user.token = token ; 
    return user ;
}

// get user
//  ! todo make function with list name with parameter of object with a query 
//  !  -- make a function generic -- for list and get .  
const getAllUsers = async()=>{
    const users = await userModel.find({});
    return users; 
}
 // ! compare password --> return true | false based on email & password .
// Login 
const login = async (email:CreateUser , password:CreateUser)=>{
    try{
        const user  = await userModel.findOne({email ,password}).exec();
        if (!user) { 
            return 'Invalid Mail or Password ' ;
        }
        // ! make it on controller 
        // ! make hooks --> presave make bcrypt for password 
        // ! make it on helper folder  .  with encryption by bcrypt .
        // ! make hashing on user model 
        const token:any  = jwt.sign(
            { id: user.id , email:user.email },
            process.env.TOKEN_KEY ||'jsontoken3498',
            {
                expiresIn:'2h',
            }
           
          );
        
          console.log(user.id , user.email);

          // save user token
          user.token = token ; 
        return user;
    } 
    catch(error) {
        return `error in Login ${error}`
    }
    
}
// update user 
// ! Make a function generic updated with any types of data . 
const updateUSer = async (id:CreateUser , data:CreateUser)=>{
    const user = await userModel.findByIdAndUpdate(id,data);
    if (!user) {
        return 'user not found '
    }
    //user.save();
    return user; 
  
    
    };

// delete user 
// ! Make a function generic deleted  with any types of data . 

const deleteUser = async (id:CreateUser)=>{
    return  await userModel.findOneAndDelete({id});
}

export const userRepository = { 
    createUser , 
    getAllUsers,
    updateUSer,
    deleteUser,
    login
}
// ! TOdo --> add product to wish List , remove wishList  ( Add to repo )
// ! Validation by email 
/*
async function isExist(id: string) {
  let record: IUser = await User.findOne({ _id: id }).populate({
    path: "",
  });

  if (record) {
    return {
      success: true,
      record,
      code: 200,
    };
  } else {
    return {
      code: 404,
      success: false,
      errors: [
        {
          key: "record",
          value: `record not found`,
        },
      ],
    };
  }
}



*/