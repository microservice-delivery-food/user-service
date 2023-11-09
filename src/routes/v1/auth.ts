import express from 'express';
import { Container } from 'typedi';

import { authController } from '../../controllers/api/v1/authController';

const userRoute = express.Router();

const AuthController = Container.get(authController);

userRoute.get('/login', AuthController.login);
userRoute.post('/register', AuthController.register);
userRoute.get('/me', AuthController.me);
userRoute.post('/logout', AuthController.logout);
userRoute.post('/refresh', AuthController.refresh);

export default userRoute;