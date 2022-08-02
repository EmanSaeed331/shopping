import { Request, Response } from "express";
import { cartsRepo } from "../carts.repo";

const createCarts = (req:Request , res:Response) => { 
    const carts = req.body;
    const cartsData = cartsRepo.createCarts(carts);
    res.json({'user':cartsData});
}


const updatingCarts = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedCarts = await cartsRepo.updating(id);
    if(!updatedCarts) res.json({'message':'invalid carts'});
    res.json({'updatedcarts':updatedCarts});
}

const deleteCarts = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedcarts = cartsRepo.deleting(id);
    if(!deletedcarts) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedcarts'})
}


const getCarts= async (req:Request , res:Response) =>{
    const id = req.params.id;
    const carts = cartsRepo.getCartsById(id);
    if (!carts) res.json({'carts':'not found'});
    res.json({'carts':carts});


}

export const adminsCartsController = {
    createCarts,
    updatingCarts,
    deleteCarts,
    getCarts

}