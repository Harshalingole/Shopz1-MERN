import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import morgan from 'morgan'
import createHttpError,{isHttpError} from "http-errors";
// Routes
import userRoutes from './routes/userRoutes'
const app = express();

// middleware
app.use(morgan("dev"));
// it tell express to accept json as body(it converts req.body into json)
app.use(express.json());
/* this is middleware that catches that get which then check the noteRoutes
and look which one is there */
app.use("/api/user", userRoutes)

// to handle if Endpoint  does not exist
app.use((req,res,next) => {
    next(createHttpError(404,"Endpoint not Found"))
})
// this catches error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if(isHttpError(error))  {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(500).json({ error: errorMessage });
});
export default app;
