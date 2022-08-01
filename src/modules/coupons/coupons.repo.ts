
import { CouponsType,Couponse } from "./types";
import couponseModel from "./coupons.model";
import { crud } from "../../CRUD/crud";

const createCouponse = async(data:CouponsType)=>{
  const couponse =  await crud.create({data},couponseModel);
  return couponse;
}
const getCouponseById = async (id:string)=>{

  console.log(` Couponse id is  ${ id }`)
  const couponse = await  crud.get({ id} , couponseModel);
  return couponse;
}

const updating = async(id:string)=>{
    const couponse =await crud.update(id , Couponse , couponseModel) ; 
    if (!couponse) { 
     console.log('Couponse Not found')
     return ' Couponse not found '
    }
  
    return Couponse; }

const deleting = async(id:string)=>{

  const couponse =await crud.remove(id , couponseModel) ;
  if ( !couponse) { 
    console.log('user not deleted')
  }
  console.log('user deleted')
 
  return couponse;
}


export const couponseRepo = { 
  
  createCouponse,
  getCouponseById,
  updating,
  deleting
    
}
