import express from 'express';
import adminRouter from './admins/admins.router';
import couponClientsRouter from './clients/clients.router';
import couponseDeliveryRouter from './deliverys/clients.router';
import storesAdminRouter from './storeAdmins/storeAdmins.router';

export const couponApp = express();

couponApp.use('/admin',adminRouter);
couponApp.use('/client',couponClientsRouter);
couponApp.use('/delivery',couponseDeliveryRouter);
couponApp.use('/storesAdmin',storesAdminRouter);
