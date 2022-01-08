import express from "express";

const router = express.Router();

import * as userCtrl from "../controllers/user.controller.js";
import { authJwt, verifySignup } from "../middlewares/index.js";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  userCtrl.createUser
);

export default router;
