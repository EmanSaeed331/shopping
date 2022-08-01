import { Request, Response } from "express";
import { storeRepo } from "../store.repo";



const getStore = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const store = storeRepo.getStoreById(id);
    if (!store) res.json({'store':'not found'});
    res.json({'store':store});


}

export const clientsController = {

    getStore

}