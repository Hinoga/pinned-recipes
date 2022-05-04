/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import api from './app/routes';
import { globalErrorHandler } from './app/errors/globalErrorMiddleware';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { dbConnection } from '@pinned-recipes/data-access-client';

const port = process.env.port || 3333;

const app = express();
app.use(globalErrorHandler);

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.use('/api', api);

dbConnection()
  .then(async () => {
    await app.listen(port);
    console.log(`Listening at http://localhost:${port}/api`);
  })
  .catch((error) => {
    console.log(error);
  });
