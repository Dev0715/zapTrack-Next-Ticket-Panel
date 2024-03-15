import express from 'express'

import { getUser, signIn, signUp, forgotPwd, resetPwd } from '../controllers/user/AuthController.js'
import userAuthMiddleware from '../middleware/user/Auth.js';

const router = express.Router()

router.get('/user', getUser)
router.post('/user/signin', signIn)
router.post('/user/signup', signUp)
router.post('/user/forgot-pwd', forgotPwd);
router.post('/user/reset-pwd', resetPwd);

export default router