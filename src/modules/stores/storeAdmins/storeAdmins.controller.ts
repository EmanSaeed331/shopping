import { Request, Response } from "express";
import { storeRepo } from "../store.repo";

const createStore = (req:Request , res:Response) => { 
    const store = req.body;
    const storeData = storeRepo.createStore(store);
    res.json({'user':storeData});
}


const updateStore = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const data = req.body;
    const updatedStore = await storeRepo.updating(id, data);
    if(!updateStore) res.json({'message':'invalid store'});
    res.json({'updatedStore':updatedStore});
}

const deleteStore = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedStore = storeRepo.deleting(id);
    if(!deletedStore) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedStore'})
}


const getStore = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const store = storeRepo.getStoreById(id);
    if (!store) res.json({'store':'not found'});
    res.json({'store':store});


}

export const adminsStoreController = {
    createStore,
    updateStore,
    deleteStore,
    getStore

}