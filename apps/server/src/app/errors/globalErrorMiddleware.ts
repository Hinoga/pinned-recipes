import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@pinned-recipes/data-access-client';
export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) return next();
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
