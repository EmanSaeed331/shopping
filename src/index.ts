import express from 'express';
import {json} from 'body-parser';
import userRouter from './modules/users/user/user.router';
import adminStoreRouter from './modules/users/storeAdmin/adminStore.routes';

import "dotenv/config";
import admin from './modules/users/admin/admin.routes';
import delivery from './modules/users/delivery/delivery.routes';

const app = express ();
app.use(json());

require('./config/db')

app.use('/user',userRouter);
app.use('/storeAdmin',adminStoreRouter)
app.use('/admin',admin)
app.use('/delivery',delivery)

app.listen (process.env.PORT , () => { 
    console.log('server is running on port 3000')
});