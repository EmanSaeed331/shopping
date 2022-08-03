import express from 'express';
import adminRouter from './admins/admins.router';
import cartClientsRouter from './clients/clients.router';
import cartDeliveryRouter from './deliverys/clients.router';
import storesAdminRouter from './storeAdmins/storeAdmins.router';

export const cartApp = express();

cartApp.use('/admin',adminRouter);
cartApp.use('/client',cartClientsRouter);
cartApp.use('/delivery',cartDeliveryRouter);
cartApp.use('/storeAdmin',storesAdminRouter)