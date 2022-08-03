import express from 'express';
import adminRouter from './admins/admins.router';
import productClientsRouter from './clients/clients.router';
import productDeliveryRouter from './deliverys/clients.router';
import productRouter from './product.route';



export const productApp = express ();

productApp.use('/product',productRouter);
productApp.use('/admin',adminRouter)
productApp.use('/delivery',productDeliveryRouter)
productApp.use('/client',productClientsRouter)