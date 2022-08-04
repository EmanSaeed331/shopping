
import { CartsType,Carts } from "./types";
import cartsModel from "./carts.model";
import { crud } from "../../CRUD/crud";

const createCarts = async(data:CartsType)=>{
  const Carts =  await crud.create({data},cartsModel);
  return Carts;
}
const getCartsById = async (id:string)=>{

  console.log(` Carts id is  ${ id }`)
  const Carts = await  crud.get({ id} , cartsModel);
   
  return Carts;
}

const updating = async(id:string)=>{
    const carts =await crud.update(id , Carts , cartsModel) ; 
    if (!carts) { 
     console.log('Cart Not found')
     return ' Cart not found '
    }
  
    return carts; }

const deleting = async(id:string)=>{

  const carts =await crud.remove(id , cartsModel) ;
  if ( !carts) { 
    console.log('Cart not deleted')
  }
  console.log('Cart deleted')
 
  return carts;
}


export const cartsRepo = { 
  
  createCarts,
  getCartsById,
  updating,
  deleting
    
}
