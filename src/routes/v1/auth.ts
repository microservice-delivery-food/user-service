import express from 'express';
import { Container } from 'typedi';

import { authController } from '../../controllers/api/v1/authController';

const userRoute = express.Router();

const AuthController = Container.get(authController);

userRoute.get('/', AuthController.index);

export default userRoute;