
import { Request , Response } from "express";
import { productsRepo } from "./product.repo";

// Create Product
const createProduct= (req:Request , res:Response) => { 
    const product = req.body;
    const storeData = productsRepo.createProduct(product);
    res.json({'user':storeData});
}


const updateProduct= async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const product= await productsRepo.updating(id);
    if(!product) res.json({'message':'invalid store'});
    res.json({'updatedStore':product});
}

const deleteProduct= async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedProduct= productsRepo.deleting(id);
    if(!deletedProduct) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedStore'})
}


const getProductById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const product= await  productsRepo.getProductById(id);
        res.json({'product':product})
}

export const productsController = 
    {
        createProduct,
        updateProduct,
        deleteProduct,
        getProductById

    }