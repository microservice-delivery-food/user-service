import express, { Request, Response } from 'express';

const userRoute = express.Router();

userRoute.get('/', (req: Request, res: Response) => {
    const { name } = req.params;
    res.send(`Hello, ${name}`);
});

export default userRoute;