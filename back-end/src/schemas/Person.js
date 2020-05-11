import { Schema, model } from 'mongoose';
import "regenerator-runtime/runtime.js";

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

const personSchema = new Schema({
  firstName: nameSchema,
  lastName: nameSchema,
  participation: participationSchema,
})

const Person = model('Person', personSchema);

exports.createPerson = async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { person: newPerson }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}
