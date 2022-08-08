import { json } from "body-parser";
import { Request, Response } from "express";
import { storeRepo } from "../store.repo";


const getStore = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const store = storeRepo.getStoreById(id);
    if (!store) res.json({'store':'not found'});
    res.json({'store':store});
}

const showAllStores = async (req:Request , res:Response)=>{
    const allStores = await storeRepo.getAllStores() ;
    res.json({'stores':allStores});
}

export const clientsController = {

    getStore,
    showAllStores

}