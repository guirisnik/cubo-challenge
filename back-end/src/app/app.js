import express from 'express';
import { json } from 'body-parser'
import { createPerson } from '../schemas/Person';

const server = express();
server.use(json());

require('../services/Database').dbConnect();

server.get('/', (req, res) => {
  res.send('<h1>Server online</h1>');
})

server.post('/create/person', createPerson);

server.listen(
  process.env.PORT,
  () => console.log(`Server running on port ${process.env.PORT}`)
);
