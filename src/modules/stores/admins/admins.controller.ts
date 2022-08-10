import { Request, Response } from "express";
import storeModel from "../store.model";
import { storeRepo } from "../store.repo";

const createStore = async(req:Request , res:Response) => { 
    const store = req.body;
    const storeData =await storeRepo.createStore(store);
    res.json({'store':storeData});
}


const updateStore = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updateDataForStore = req.body ;
    const updatedStore = await storeRepo.updating(id , updateDataForStore);
    if(!updateStore) res.json({'message':'invalid store'});
    res.json({'updatedStore':updatedStore});
}
const createStore1 =async  (req:Request , res:Response) => { 
    /*  const {store} = req.body;
     const admin = req.User._id; */
 
     const storeData = await storeModel.create({
         admins:req.params.id,
         storeName:req.body.storeName,
         about:req.body.about,
         rating:req.body.rating
        // category:req.products._id ,
     })
     
     res.json({'store':storeData});
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


export const adminsController = {
    createStore,
    updateStore,
    deleteStore,
    getStore,
    createStore1

}