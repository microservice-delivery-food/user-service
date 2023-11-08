import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'; 

import userRoute from './routes/v1/user';
import authRoute from './routes/v1/auth';

const app: Application = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use('/api/v1/users' , userRoute);
app.use('/api/v1/auth' , authRoute);


app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');
  next(err);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
