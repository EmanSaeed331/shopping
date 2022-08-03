import express from 'express';
import adminRouter from './admins/admins.router';
import orderClientsRouter from './clients/clients.router';
import productDeliveryRouter from './deliverys/clients.router';
import storesAdminRouter from './storeAdmins/storeAdmins.router';

export const orderApp =  express();
orderApp.use('/storesAdmin',storesAdminRouter);
orderApp.use('/productDelivery',productDeliveryRouter);
orderApp.use('/Clients',orderClientsRouter)
orderApp.use('/admin',adminRouter)