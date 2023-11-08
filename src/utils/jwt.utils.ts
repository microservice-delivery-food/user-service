import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (userId: number): string => {
    return jwt.sign({ id: userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): jwt.JwtPayload | string => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw new Error('Token is not valid');
    }
};
