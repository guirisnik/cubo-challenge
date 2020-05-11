const express = require('express');
const json = require('body-parser').json;
const { createPerson, readAllPersons, deleteAllPersons } = require('../schemas/Person');

const server = express();
server.use(json());

require('../services/Database').dbConnect();

server.get('/', (req, res) => {
  res.send('<h1>Server online</h1>');
})

server.post('/create/person', createPerson);
server.get('/read/all', readAllPersons);
server.post('/delete/all', deleteAllPersons);

server.listen(
  process.env.PORT,
  () => console.log(`Server running on port ${process.env.PORT}`)
);
