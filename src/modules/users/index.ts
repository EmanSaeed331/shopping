import  express  from "express";
import adminRouter from "./admin/admin.routes";
import userRouter from "./client/client.router";
import deliveryRouter from "./delivery/delivery.routes";
import adminStoreRouter from "./storeAdmin/adminStore.routes";
export const app = express();

app.use('/adminStoreRouter',adminStoreRouter);
app.use('/deliveryRouter',deliveryRouter);
app.use('/userRouter',userRouter);
app.use('/adminRouter',adminRouter);
