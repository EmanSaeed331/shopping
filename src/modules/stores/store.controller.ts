
import { Request , Response } from "express";
import { crud } from "../../CRUD/crud";
import { Store } from "./types";
import storeModel from "./store.model";
import { storeRepo } from "./store.repo";
import { json } from "body-parser";

// Create store 
const createStore = (req:Request , res:Response) => { 
    const store = req.body;
    const storeData = storeRepo.createStore(store);
    res.json({'user':storeData});
}


const updateStore = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updatedStore = await storeRepo.updating(id);
    if(!updateStore) res.json({'message':'invalid store'});
    res.json({'updatedStore':updatedStore});
}

const deleteStore = async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedStore = storeRepo.deleting(id);
    if(!deleteStore) res.json({'message':'Invalid Id '})
    res.json({'message':'deletedStore'})
}


const getStore = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const store = storeRepo.getStoreById(id);
    if (!store) res.json({'store':'not found'});
    res.json({'store':store});


}
// update Store 
/* const updateStore1 =async (req:Request, res:Response) => { 
    const id = req.params.id;
    const store =await crud.update(id , Store , storeModel) ; 
    if (!store) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'Store':store});
    return store; }
// delete Store  */


/* const deleteStore1 = async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedStore =await  crud.remove(id , storeModel) ;
    if ( !deletedStore) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Store deleted'})
    return deletedStore;
} 


const getStore = async (req:Request , res:Response) =>{
    const id = req.params.id;
    const store = storeRepo.getStoreById(id);
    if (!store) res.json({'store':'not found'});
    res.json({'store':store});


    const getStoreById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const store = await  crud.getById(id, storeModel);
        res.json({'LoggedIn User ':store})
}
*/
export const storeController = {
    createStore,
    updateStore,
    deleteStore,
    getStore
}