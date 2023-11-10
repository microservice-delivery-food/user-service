import express from 'express';
import {Container} from 'typedi';

import {authController} from '../../controllers/api/v1/authController';
import AuthValidation from "../../validators/authValidation";

const userRoute = express.Router();

const AuthController = Container.get(authController);

userRoute.post('/login', AuthController.login);
userRoute.post('/register', AuthValidation.register(), AuthController.register);
userRoute.get('/me', AuthController.me);
userRoute.post('/logout', AuthController.logout);
userRoute.post('/refresh', AuthController.refresh);

export default userRoute;