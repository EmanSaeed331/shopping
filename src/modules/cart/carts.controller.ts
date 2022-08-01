
import { Request , Response } from "express";
import { cartsRepo } from "./carts.repo";

// Create Cartes
const createCarts= (req:Request , res:Response) => { 
    const cartes = req.body;
    const cartData = cartsRepo.createCarts(cartes);
    res.json({'user':cartData});
}


const updateCarts= async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const Cartes= await cartsRepo.updating(id);
    if(!Cartes) res.json({'message':'invalid store'});
    res.json({'updatedStore':Cartes});
}

const deleteCarts= async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedCartes= cartsRepo.deleting(id);
    if(!deletedCartes) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedStore'})
}


const getCartsById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const cartes= await  cartsRepo.getCartsById(id);
        res.json({'Cartes':cartes})
}

export const cartesController = 
    {
        createCarts,
        updateCarts,
        deleteCarts,
        getCartsById

    }