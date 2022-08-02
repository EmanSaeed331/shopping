import { Request, Response } from "express";
import { productsRepo } from "../product.repo";

const createProduct = (req:Request , res:Response) => { 
    const Product = req.body;
    const ProductData = productsRepo.createProduct(Product);
    res.json({'user':ProductData});
}


const updateProduct = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedProduct = await productsRepo.updating(id);
    if(!updateProduct) res.json({'message':'invalid Product'});
    res.json({'updatedProduct':updatedProduct});
}

const deleteProduct = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedProduct = productsRepo.deleting(id);
    if(!deletedProduct) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedProduct'})
}


const getProduct = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const Product = productsRepo.getProductById(id);
    if (!Product) res.json({'Product':'not found'});
    res.json({'Product':Product});


}

export const adminsProductController = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct

}