import  express  from "express";
import adminRouter from "./admin/admin.routes";
import userRouter from "./client/client.router";
import deliveryRouter from "./delivery/delivery.routes";
import adminStoreRouter from "./storeAdmin/adminStore.routes";

export const userApp = express();

userApp.use('/adminStore',adminStoreRouter);
userApp.use('/delivery',deliveryRouter);
userApp.use('/client',userRouter);
userApp.use('/admin',adminRouter);
