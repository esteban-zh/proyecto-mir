import express from 'express'
import {carsRouter} from './routers/index.js';
import {authRouter} from './routers/index.js' 
import { createRoles } from './libs/initialSetup.js';
import userRoutes from './routers/user.routes.js'
import cors from "cors";

const app = express();

createRoles();

app.use(express.static('public'));

app.use(express.json());
app.use(cors());

app.use("/api", carsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRoutes);

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("server initialized.........");
});

// app.route(carsRoutes.GET).get((req, res) => {
//     res.send("getting cars.....")
// });