import * as yup from 'yup'
import { Name, Participation, RequiredField } from 'constants/Person'

const singleNameSchema = yup
  .string()
  .required(RequiredField)
  .min(
    Name["min-number-of-characters"],
    Name["invalid-length"],
  )
  .matches(
    Name["single-name-regex"],
    Name["invalid-character"],
  )

const multiNameSchema = yup
  .string()
  .required(RequiredField)
  .min(
    Name["min-number-of-characters"],
    Name["invalid-length"],
  )
  .matches(
    Name["multi-name-regex"],
    Name["invalid-character"]
  )

const participationSchema = yup
  .number()
  .typeError(Participation["invalid-participation"])
  .integer(Participation["invalid-participation"])
  .required(RequiredField)
  .max(
    Participation["max-participation"],
    Participation["invalid-participation"]
  )
  .min(
    Participation["min-participation"],
    Participation["invalid-participation"]
  )

const personSchema = yup.object().shape({
  firstName: singleNameSchema,
  lastName: multiNameSchema,
  participation: participationSchema,
})

export { personSchema }
