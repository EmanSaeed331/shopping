import express from 'express';
import {json} from 'body-parser';
import "dotenv/config";

const app = express ();
app.use(json());
require('./DB/db')

app.listen (process.env.PORT , () => { 
    console.log('server is running on port 3000')
});