import express from "express";
import {Car} from "../controllers/index.js";

const router = express.Router();

const carsRoutes = {
    GET: '/cars',
    GET_ONE: '/cars/:id',
    CREATE: '/cars/create',
    UPDATE: '/cars/update/:id',
    DELETE: '/cars/delete/:id',
};

router.get(carsRoutes.GET, Car.prototype.getAll);
router.get(carsRoutes.GET_ONE, Car.prototype.getOne);

export default router;