import express from 'express';
import {json} from 'body-parser';
import userRouter from './modules/user/user.controller';
import "dotenv/config";

const app = express ();
app.use(json());
require('./DB/db')

app.use('/user',userRouter);
app.listen (process.env.PORT , () => { 
    console.log('server is running on port 3000')
});