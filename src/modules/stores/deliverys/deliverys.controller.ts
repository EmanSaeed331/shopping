import { Request, Response } from "express";
import { storeRepo } from "../store.repo";

    const getStore = async (req:Request , res:Response) =>{
        const id = req.params.id;
        const store = await storeRepo.getStoreById(id);
        if (!store) res.json({'store':'not found'});
        res.json({'store':store});
    }
    
    const showAllStores = async (req:Request , res:Response)=>{
        const allStores = await storeRepo.readStores() ;
        console.log(`STORES++++ ${allStores}`)
        res.json({'stores':allStores});
    }
    

export const storeDeliveryController = {

    getStore , showAllStores

}