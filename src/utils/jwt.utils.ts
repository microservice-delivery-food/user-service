import jwt, {JwtPayload} from 'jsonwebtoken';
import {AuthInterface} from "../types/auth.jwt.payload";

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (userId: number): string => {
    return jwt.sign({id: userId}, secret, {expiresIn: '1h'});
};

export const verifyToken = (token: string): AuthInterface => {
    try {
        return <AuthInterface>jwt.verify(token, process.env.JWT_SECRET || 'defaultValue');
    } catch (error) {
        throw new Error('Token is not valid');
    }
};
