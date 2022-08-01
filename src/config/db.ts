import mongoose from 'mongoose';

import "dotenv/config";

mongoose.connect(process.env.DB_CONN_STRING as string , {
}, () => { 
    console.log('connected to DB ')
}
 )
