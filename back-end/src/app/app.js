const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createPerson, readAllPersons, deleteAllPersons } = require('../schemas/Person');

const server = express();
server.use(bodyParser.json());
server.use(cors());

require('../services/Database').dbConnect();

server.get('/', (req, res) => {
  res.send('<h1>Server online</h1>');
})

server.post('/create/person', createPerson);
server.get('/read/all', readAllPersons);
server.post('/delete/all', deleteAllPersons);
server.delete('/delete/all', deleteAllPersons);

server.listen(
  process.env.PORT,
  () => console.log(`Server running on port ${process.env.PORT}`)
);
