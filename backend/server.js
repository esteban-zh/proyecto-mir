import express from 'express'
import {carsRouter} from './routers/index.js';
import {authRouter} from './routers/index.js' 
// import { createRoles } from './libs/initialSetup.js';


const app = express();

// createRoles();

app.use(express.static("public"));

app.use(express.json());

app.use("/api", carsRouter);
app.use("/api/auth", authRouter);

app.set('view engine', 'ejs');

const PORT = process.env.POR || 4000
app.listen(PORT, () => {
    console.log("server initialized.........");
});

// app.route(carsRoutes.GET).get((req, res) => {
//     res.send("getting cars.....")
// });