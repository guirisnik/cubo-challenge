'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _Person = require('../schemas/Person');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
server.use((0, _bodyParser.json)());

require('../services/Database').dbConnect();

server.get('/', function (req, res) {
  res.send('<h1>Server online</h1>');
});

server.post('/create/person', _Person.createPerson);

server.listen(process.env.PORT, function () {
  return console.log('Server running on port ' + process.env.PORT);
});