import express from 'express'
// import path from 'path'
// const path = require('path');
// import path from 'express';
// import { dirname } from 'path';
import {carsRouter} from './routers/index.js';

const app = express();

app.use(express.json());

app.use("/api", carsRouter);

app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "views"));

//const PORT = process.env.POR || 4000     ----- PARA DESPLIEGUE EN HEROKU CAMBIA 4000 POR PORT
app.listen(4000, () => {
    console.log("server initialized.........");
});

// app.route(carsRoutes.GET).get((req, res) => {
//     res.send("getting cars.....")
// });