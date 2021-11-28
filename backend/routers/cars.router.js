import express from "express";
import {Car} from "../controllers/index.js";

const router = express.Router();

// import { verifyToken } from "../middlewares/authJwt.js";

const carsRoutes = {
    GET: '/cars',
    GET_ONE: '/cars/:id',
    CREATE: '/cars/create',
    UPDATE: '/cars/update/:id',
    DELETE: '/cars/delete/:id',
};

router.get(carsRoutes.GET, Car.prototype.getAll);
router.get(carsRoutes.GET_ONE, Car.prototype.getOne);
router.post(carsRoutes.CREATE, Car.prototype.create);
router.put(carsRoutes.UPDATE, Car.prototype.update);
router.delete(carsRoutes.DELETE, Car.prototype.deleteOne);

export default router;