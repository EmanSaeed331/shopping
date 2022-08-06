
import { OrdersType,Orders } from "./types";
import ordersModel from "./order.model";
import { crud } from "../../CRUD/crud";

const createOrders = async(data:OrdersType)=>{
  const orders =  await crud.create({data},ordersModel);
  return orders;
}
const getOrdersById = async (id:string)=>{

  console.log(` Orders id is  ${ id }`)
  const orders = await  crud.get({ id} , ordersModel);
  return orders;
}

const updating = async(id:string)=>{
    const orders =await crud.update(id , Orders , ordersModel) ; 
    if (!orders) { 
     console.log('Orders Not found')
     return ' Orders not found '
    }
  
    return Orders; }

const deleting = async(id:string)=>{

  const orders =await crud.remove(id , ordersModel) ;
  if ( !orders) { 
    console.log('user not deleted')
  }
  console.log('user deleted')
 
  return Orders;
}


export const OrdersRepo = { 
  
  createOrders,
  getOrdersById,
  updating,
  deleting
    
}