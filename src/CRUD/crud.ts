
   // Create 
  async function create<T>(data:T , model:any){
        const newObj = await new model(data);
        return newObj;
         }
    // read 
    async function read(model:any){
        return await model.find({});
    }
    // update
    async function update<T>(id:string, data:T , model:any){
        return await model.findByIdAndUpdate(id,data);
    }
    // delete
    async function remove(id:string , model:any){
        return await model.findOneAndDelete(id);
    }

export const crud = {
    create,
    read,
    update,
    remove
}