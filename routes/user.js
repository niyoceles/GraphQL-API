import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();
router.post('/login', userController.signIn);
router.post('/signup', userController.signUp);


export default router;