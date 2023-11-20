import {Response, NextFunction} from 'express';

import {verifyToken} from '../utils/jwt.utils';
import {CustomRequest} from "../types/request";
import {AuthInterface} from "../types/auth.jwt.payload";


export const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Authentication token required');
    }

    const token = authHeader.replace('Bearer ', '');

    const payload: AuthInterface = verifyToken(token);

    req.user = payload.user;
    next();
};
