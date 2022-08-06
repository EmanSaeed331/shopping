import express from 'express';
import {json} from 'body-parser';
import { userApp } from './modules/users';
import { productApp } from './modules/products';
import { orderApp } from './modules/order';
import { couponApp } from './modules/coupons';
import { cartApp } from './modules/cart';
import { storesApp } from './modules/stores';
import cors from 'cors';

const app = express ();
app.use(cors());
app.use(json());

require('./config/db')

app.use(userApp)
app.use('/api/v1/users',userApp);
app.use('/api/v1/stores',storesApp);
app.use('/api/v1/products',productApp);
app.use('/api/v1/orders',orderApp);
app.use('/api/v1/coupon',couponApp);
app.use('/api/v1/carts',cartApp)






app.listen (process.env.PORT , () => { 
    console.log('server is running on port 3000')
});