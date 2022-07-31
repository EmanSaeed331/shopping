
import { Request , Response } from "express";
import { crud } from "../../CRUD/crud";
import { Store } from "./types";
import storemodel from "./store.model";

// Create admin 
const createStore = (req:Request , res:Response) => { 
    const user =  crud.create(Store,storemodel);
    res.json({'user':user});
}

// read   All Users 
/* const readStore = (req:Request , res:Response) => {
    return crud.read(userModel) 
} */
// update Store 
const updateStore =async (req:Request, res:Response) => { 
    const id = req.params.id;
    const store =await crud.update(id , Store , storemodel) ; 
    if (!store) { 
     console.log('user Not found')
     return ' User not found '
    }
    res.json({'Store':store});
    return store; }
// delete Store 
const deleteStore = async(req:Request , res:Response) =>{
    const id = req.params.id;
    const deletedStore =await  crud.remove(id , storemodel) ;
    if ( !deletedStore) { 
      console.log('user not deleted')
    }
    console.log('user deleted')
    res.json({'message': 'Store deleted'})
    return deletedStore;
}

const getStoreById = async (req:Request,res:Response) => { 
        const id = req.params.id;
        const store = await  crud.getById(id, storemodel);
        res.json({'LoggedIn User ':store})
}
export const storeController = {
    createStore,
    updateStore,
    deleteStore,
    getStoreById
}