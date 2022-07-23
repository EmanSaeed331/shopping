import mongoose from 'mongoose';

mongoose.connect(process.env.DB_CONN_STRING as string , {
}, () => { 
    console.log('connected to DB ')
}
 )
