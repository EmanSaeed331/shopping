
   // Create u
  async function create<T>(data:T , model:any){
        const newObj = await new model(data);
        return newObj;
         }
    // read  all users 
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

    // get by email 
 
    async function getByemail (email:string  , password:string, model:any) {
        const user = await model.findOne({email , password}) ; 
        if (! user ) {
            return ' Email is not valid';
        }
        return user ; 
    }
export const crud = {
    create,
    read,
    update,
    remove,
    getByemail
}