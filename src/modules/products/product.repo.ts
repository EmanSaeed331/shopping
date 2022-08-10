
import { ProductsType,Products } from "./types";
import productModel from "./products.model";
import { crud } from "../../CRUD/crud";

const createProduct = async(data:ProductsType)=>{

  const product =  await crud.create(data,productModel);
  return product;
}

const getAllProducts = async  ()=>{ 
  await crud.read(productModel);
}
const getProductById = async (id:string)=>{

  console.log(` Product id is  ${ id }`)
  const product = await  crud.getById(id , productModel);
  return product;
}

const updating = async(id:string)=>{
    const product =await crud.update(id , Products , productModel) ; 
    if (!product) { 
     console.log('Product Not found')
     return ' Product not found '
    }
  
    return product; }

const deleting = async(id:string)=>{

  const product =await crud.remove(id , productModel) ;
  if ( !product) { 
    console.log('user not deleted')
  }
  console.log('user deleted')
 
  return product;
}


export const productsRepo = { 
  
  createProduct,
  getProductById,
  updating,
  deleting,
  getAllProducts
    
}
