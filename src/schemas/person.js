import * as yup from 'yup'
import { personConstants } from 'constants/Schemas'

const nameSchema = yup
  .string()
  .required()
  .matches(
    personConstants["name-regex"],
    personConstants["invalid-name"]
  )

const participationSchema = yup
  .number()
  .positive()
  .max(
    personConstants["max-participation"],
    personConstants["invalid-participation"]
  )

const personSchema = yup.object().shape({
  firstName: nameSchema,
  lastName: nameSchema,
  participation: participationSchema,
})

export { personSchema }
