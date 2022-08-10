
import { Request , Response } from "express";
import storeModel from "./store.model";
import { storeRepo } from "./store.repo";


/*
   storeName:String,
   about:String,
   rating:{
      type:Number , 
      enum:[0,1,2,3,4,5]
   },
   category:{
      type:ObjectId,
      ref:'products'
   },
   admins:[{type:ObjectId , ref:'User', required:true}],

*/ 
// Create store 
const createStore =async  (req:Request , res:Response) => { 
   /*  const {store} = req.body;
    const admin = req.User._id; */

    const storeData = await storeModel.create({
        admins:req.params._id,
        storeName:req.body,
        about:req.body,
        rating:req.body,
       // category:req.products._id ,
    })
    
    res.json({'store':storeData});
}


const updateStore = async (req:Request,res:Response) =>{
    const id = req.params.id; 
    const updateData = req.body;
    const updatedStore = await storeRepo.updating(id , updateData);
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