import express from 'express';
import {json} from 'body-parser';
import { userApp } from './modules/users';
import { productApp } from './modules/products';
import { orderApp } from './modules/order';
import { couponApp } from './modules/coupons';
import { cartApp } from './modules/cart';


const app = express ();
app.use(json());

require('./config/db')

app.use('/user',userApp);
app.use('/stores',userApp);
app.use('/products',productApp);
app.use('/order',orderApp);
app.use('/coupon',couponApp);
app.use('/cart',cartApp)




/* app.use('/user',userRouter);
app.use('/storeAdmin',adminStoreRouter);
app.use('/admin',adminRouter);
app.use('/delivery',deliveryRouter);
app.use('/stores',storeRouter);
app.use('/products',productRouter);
app.use('/order',orderRouter);
//app.use('/coupons',couponseRouter);
app.use('/cart',cartsRouter); */

app.listen (process.env.PORT , () => { 
    console.log('server is running on port 3000')
});