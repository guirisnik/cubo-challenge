export const initialPerson = {
  firstName: '',
  lastName: '',
  participation: '',
}

const MIN_NUMBER_OF_CHARACTERS = 2

export const Name = {
  'invalid-length': `Your name must contain at least ${MIN_NUMBER_OF_CHARACTERS} characters.`,
  'invalid-character': 'Your name must not contain numbers nor special characters (e.g. ?#$).',
  'min-number-of-characters': MIN_NUMBER_OF_CHARACTERS,
  'single-name-regex': /^(?:[a-záàâãéèêíïóôõöúçñ]{2,})$/i,
  'multi-name-regex': /^(?:[a-záàâãéèêíïóôõöúçñ]{2,})(\s(?:[a-záàâãéèêíïóôõöúçñ]{2,}\s?)+){0,}$/i,
}

export const Participation = {
  'invalid-participation': 'Participation must be a whole number between 0 and 100.',
  'max-participation': 100,
  'min-participation': 0,
}

export const RequiredField = 'This field cannot be empty.'
