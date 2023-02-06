import express from 'express'
import * as userController from '../controllers/UserControler'
const router = express.Router();

// UserRoutes
    //User --> Post Request  Routes
router.post('/signup',userController.signupUser);
router.post('/login',userController.loginUser);
router.get('/getusers', userController.getUserDetail)

export default router;