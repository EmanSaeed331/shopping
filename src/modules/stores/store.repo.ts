
import { StoreType} from "./types";
import storeModel from "./store.model";
import { crud } from "../../CRUD/crud";

const createStore = async(data:StoreType)=>{
  const store =  await crud.create(data,storeModel);
  return store;
}

const getStoreById = async (id:string)=>{

  console.log(` Store id is  ${ id }`)
  const store = await  crud.getById(id , storeModel);
  return store;
}

const updating = async(id:string , data:StoreType)=>{
    const store =await crud.update(id ,data,storeModel) ; 
    if (!store) { 
     console.log('store Not found')
     return ' store not found '
    }
  
    return store; }

const deleting = async(id:string)=>{

  const store =await  crud.remove(id , storeModel) ;
  if ( !store) { 
    console.log('user not deleted')
  }
  console.log('user deleted')
 
  return store;
}

const getAllStores = async ()=>{

  const store = await  crud.read(storeModel);
  return store;
}

const readStores = async()=>{
  const stores =await crud.read(storeModel);
  return stores ;
}
export const storeRepo = { 
  
  createStore,
  getStoreById,
  updating,
  deleting , 
  getAllStores ,
  readStores
    
}
