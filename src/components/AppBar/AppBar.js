import React from "react"
import {
	AppBarWrapper,
	FormWrapper,
	InputWrapper,
	ButtonWrapper,
} from "components/Wrappers"
import { Input } from 'components/Input'
import { TextButton } from 'components/TextButton'
import { initialPerson } from 'constants/Person'
import { placeholders, sendButton } from 'constants/Form'
import { personSchema } from 'schemas'
import { useFormik } from 'formik'

const AppBar = () => {

  const formikConfig = {
    initialValues: initialPerson,
    validationSchema: personSchema,
    onSubmit: submitStep,
  }

  const {
    values,
    handleChange,
    handleSubmit,
  } = useFormik(formikConfig)

  return (
    <AppBarWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            placeholder={placeholders.firstName}
            onChange={handleChange}
            value={values.firstName}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder={placeholders.lastName}
            onChange={handleChange}
            value={values.lastName}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder={placeholders.participation}
            onChange={handleChange}
            value={values.participation}
          />
        </InputWrapper>
        <ButtonWrapper>
          <TextButton>{sendButton}</TextButton>
        </ButtonWrapper>
      </FormWrapper>
    </AppBarWrapper>
  )
}

export { AppBar }
