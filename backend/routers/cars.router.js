import express from "express";
import {Car} from "../controllers/index.js";
import {authJwt} from "../middlewares/index.js";

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
router.post(carsRoutes.CREATE , [authJwt.verifyToken, authJwt.isAdmin], Car.prototype.create);
router.put(carsRoutes.UPDATE, [authJwt.verifyToken, authJwt.isAdmin], Car.prototype.update);
router.delete(carsRoutes.DELETE, [authJwt.verifyToken, authJwt.isAdmin], Car.prototype.deleteOne);

export default router;