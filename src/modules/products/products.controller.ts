
import { Request , Response } from "express";
import { crud } from "../../CRUD/crud";
import { Products } from "./types";
import productModel from "./products.model";

// Create admin 
const createProduct= (req:Request , res:Response) => { 
    const user =  crud.create(Products,productModel);
    res.json({'user':user});
}

// update Product
const updateProduct=async (req:Request, res:Response) => { 
    const id = req.params.id;
    const product=await crud.update(id , Products , productModel) ; 
    if (!product) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'Store':product});
    return product; }
// delete Product
const deleteProduct= async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedProduct=await  crud.remove(id , productModel) ;
    if ( !deletedProduct) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Productdeleted'})
    return deletedProduct;
}

const getProductById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const Product= await  crud.getById(id, productModel);
        res.json({'LoggedIn User ':Product})
}
export const productController = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
}