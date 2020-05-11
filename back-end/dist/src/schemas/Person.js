'use strict';

var _mongoose = require('mongoose');

require('regenerator-runtime/runtime.js');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var nameSchema = {
  type: String,
  required: true,
  unique: false,
  match: /^(?:[a-záàâãéèêíïóôõöúçñ]{2,})$/i,
  minlength: 2,
  trim: true
};

var participationSchema = {
  type: Number,
  required: true,
  unique: false,
  max: 101,
  min: 0,
  validate: /^0*(?:[1-9][0-9]?|100)$/i
};

var personSchema = new _mongoose.Schema({
  firstName: nameSchema,
  lastName: nameSchema,
  participation: participationSchema
});

var Person = (0, _mongoose.model)('Person', personSchema);

exports.createPerson = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var newPerson;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Person.create(req.body);

          case 3:
            newPerson = _context.sent;


            res.status(201).json({
              status: 'success',
              data: { person: newPerson }
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            res.status(400).json({
              status: 'fail',
              message: _context.t0
            });

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();