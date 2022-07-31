import express from 'express';
import {json} from 'body-parser';
import userRouter from './modules/users/user/user.router';
import adminStoreRouter from './modules/users/storeAdmin/adminStore.routes';

import "dotenv/config";
import adminRouter from './modules/users/admin/admin.routes';
import deliveryRouter from './modules/users/delivery/delivery.routes';
import storeRouter from './modules/stores/store.route';
import productRouter from './modules/products/product.route';
import orderRouter from './modules/order/order.route';
import cartsRouter from './modules/cart/carts.router';

const app = express ();
app.use(json());

require('./config/db')

app.use('/user',userRouter);
app.use('/storeAdmin',adminStoreRouter);
app.use('/admin',adminRouter);
app.use('/delivery',deliveryRouter);
app.use('/stores',storeRouter);
app.use('/products',productRouter);
app.use('/order',orderRouter);
//app.use('/coupons',couponseRouter);
app.use('/cart',cartsRouter);

app.listen (process.env.PORT , () => { 
    console.log('server is running on port 3000')
});