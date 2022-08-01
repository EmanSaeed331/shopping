import express from 'express';
import adminRouter from './admins/admins.router';
import storeRouter from './store.route';
import storeDeliveryRouter from './deliverys/clients.router';
import storeClientsRouter from './clients/clients.router';

const app = express ();

app.use('/store',storeRouter);
app.use('/store/admin',adminRouter)
app.use('/store/delivery',storeDeliveryRouter)
app.use('/store/client',storeClientsRouter)