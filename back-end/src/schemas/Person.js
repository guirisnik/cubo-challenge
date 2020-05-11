const database = require('mongoose');

const nameSchema = {
  type: String,
  required: true,
  unique: false,
  match: /^(?:[a-záàâãéèêíïóôõöúçñ]{2,})$/i,
  minlength: 2,
  trim: true,
}

const participationSchema = {
  type: Number,
  required: true,
  unique: false,
  max: 101,
  min: 0,
  validate: /^0*(?:[1-9][0-9]?|100)$/i,
}

const personSchema = new database.Schema({
  firstName: nameSchema,
  lastName: nameSchema,
  participation: participationSchema,
})

const Person = database.model('Person', personSchema);

const validateParticipation = async (newPerson) => {
  let result;

  await Person.find((err, res) => {
    if (err) {
      throw (err);
    } else {
      result = parseInt(newPerson.participation);

      res.forEach((person) => {
        result += person.participation;
      });
    }
  });

  return result <= 100;
}

exports.createPerson = async (req, res) => {
  try {
    let newPerson;

    if (await validateParticipation(req.body)) {
      newPerson = await Person.create(req.body);
      console.log('New person created.')
    } else {
      throw ('Participation overflow. Can\'t be over 100.');
    }

    res.status(201).json({
      status: 'success',
      data: { person: newPerson }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.readAllPersons = async (req, res) => {
  try {
    let persons;

    await Person.find(
      {},
      {
        '_id': 0,
        '__v': 0,
      },
      (err, res) => {
        if (err) {
          throw (err);
        } else {
          persons = res;
          console.log('All persons fetched.')
        }
    });

    res.status(200).json({
      status: 'success',
      data: persons,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
}

exports.deleteAllPersons = async (req, res) => {
  try {
    await Person.deleteMany({}, (err) => {
      if (err) {
        throw (err);
      }
      console.log('Base erased.')
    });

    res.status(200).json({
      status: 'success',
      message: 'Base erased.',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}