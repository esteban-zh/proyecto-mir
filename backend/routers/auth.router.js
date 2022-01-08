import express from "express";

const router = express.Router();

import * as authCtrl from '../controllers/auth.controller.js'
import {verifySignup} from '../middlewares/index.js'

router.post('/signup', [verifySignup.checkDuplicateUser, verifySignup.checkRolesExisted],  authCtrl.signUp)
router.post('/signin', authCtrl.signIn)

export default router;


