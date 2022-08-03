import express from 'express';
import adminRouter from './admins/admins.router';
import storeClientsRouter from './clients/clients.router';
import storeDeliveryRouter from './deliverys/clients.router';
import storesAdminRouter from './storeAdmins/storeAdmins.router';


export const storesApp = express ();

storesApp.use('/admin',adminRouter);
storesApp.use('/client',storeClientsRouter)
storesApp.use('/delivery',storeDeliveryRouter)
storesApp.use('/storeAdmin',storesAdminRouter)

