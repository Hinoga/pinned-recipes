/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import api from './app/routes';

const port = process.env.port || 3333;
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});
app.use('/api', api);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
