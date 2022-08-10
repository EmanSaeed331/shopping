import { Request, Response } from "express";
import { productsRepo } from "../product.repo"
import productModel from "../products.model";


/*

  /*
      productName:{type:String},
    productDescription:{type:String},
    price:{type:Number},
    discount:{type:Number}, 
    storeId:{type:ObjectId,ref:'Store'},
    image:{type:String},
    category:{type:String, enum:['Electronics','Clothing, Shoes, and Jewelry','Home and Kitchen','Beauty and Personal Care','Books','Pet Supplies','Sports and Outdoors']},
    quantity:{type:Number},
  
  */ 


const createProduct = async  (req:Request , res:Response) => { 
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const price = req.body.price;
    const discount = req.body.discount;
    const storeId = req.params.storeId;
    const image = req.body.image;
    const category = req.body.category;
    const quantity = req.body.quantity;

    const product = await productModel.create({
        productName,
        productDescription,
        price,
        discount,
        storeId,
        image,
        category,
        quantity
    })
   /*  const product = req.body;
    const productData = productsRepo.createProduct({});*/
    res.json({'product':product}); 
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