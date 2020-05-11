'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var database = require('mongoose');

require('dotenv').config();

var dbConnect = exports.dbConnect = function dbConnect() {
  return database.connect(process.env.DB_HOST.replace('<password>', process.env.DB_PASSWORD), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(function () {
    return console.log('Database connected.');
  });
};