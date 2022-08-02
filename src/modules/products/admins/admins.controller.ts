import { Request, Response } from "express";
import { productsRepo } from "../product.repo"

const createProduct = (req:Request , res:Response) => { 
    const product = req.body;
    const productData = productsRepo.createProduct(product);
    res.json({'user':productData});
}


const updateProduct = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedProduct = await productsRepo.updating(id);
    if(!updatedProduct) res.json({'message':'invalid product'});
    res.json({'updatedproduct':updatedProduct});
}

const deleteProduct = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedProduct = productsRepo.deleting(id);
    if(!deletedProduct) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedproduct'})
}


const getProduct = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const product = productsRepo.getProductById(id);
    if (!product) res.json({'product':'not found'});
    res.json({'product':product});


}

export const adminsController = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct

}