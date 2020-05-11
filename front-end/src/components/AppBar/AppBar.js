import React, { useState, useEffect } from 'react'
import { AppBarWrapper, FormWrapper, ButtonWrapper } from 'components/Wrappers'
import { Table } from 'components/Table'
import { Input } from 'components/Input'
import { TextButton } from 'components/TextButton'
import { ValidationAdornment } from 'components/ValidationAdornment'
import { HelperAdornment } from 'components/HelperAdornment'
import { initialPerson } from 'constants/Person'
import { placeholders, sendButton } from 'constants/Form'
import { personSchema, fieldValidation } from 'schemas'
import { usePerson } from 'hooks/usePerson'
import { useFormik } from 'formik'

const AppBar = () => {
  const [rowData, setRowData] = useState([]);
  const { createPerson, readAll } = usePerson();

  useEffect(() => {
    async function fetchData() {
      const rowData = await readAll();
      setRowData(rowData);
    }

    fetchData();
  }, []);

  const submitStep = async values => {
    let response = await createPerson(values);
    setRowData(await readAll());
    return response;
  }

  const formikConfig = {
    initialValues: initialPerson,
    validationSchema: personSchema,
    onSubmit: submitStep,
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldTouched,
    setFieldError,
    isSubmitting,
  } = useFormik(formikConfig)

  const onInputBlur = async e => {
    e.persist()

    const fieldName = e.target.name
    const fieldValue = e.target.value

    await fieldValidation({
      setFieldTouched,
      setFieldError,
      schema: personSchema,
      field: fieldName,
      value: fieldValue,
    })

    return handleBlur(e)
  }

  return (
    <span>
      <AppBarWrapper>
        <FormWrapper onSubmit={handleSubmit}>
        <Input
            label={placeholders.firstName}
            id={'firstName'}
            name={'firstName'}
            placeholder={placeholders.firstName}
            value={values.firstName}
            onChange={handleChange}
            onBlur={onInputBlur}
            validationAdornment={(<ValidationAdornment
              error={touched.firstName && errors.firstName}
              success={touched.firstName}
            />)}
            helperAdornment={(<HelperAdornment
              error={touched.firstName && errors.firstName}
            />)}
          />
          <Input
            label={placeholders.lastName}
            id={'lastName'}
            name={'lastName'}
            placeholder={placeholders.lastName}
            value={values.lastName}
            onChange={handleChange}
            onBlur={onInputBlur}
            validationAdornment={(<ValidationAdornment
              error={touched.lastName && errors.lastName}
              success={touched.lastName}
            />)}
            helperAdornment={(<HelperAdornment
              error={touched.lastName && errors.lastName}
            />)}
          />
          <Input
            label={placeholders.participation}
            id={'participation'}
            name={'participation'}
            placeholder={placeholders.participation}
            value={values.participation}
            onChange={handleChange}
            onBlur={onInputBlur}
            validationAdornment={(<ValidationAdornment
              error={touched.participation && errors.participation}
              success={touched.participation}
            />)}
            helperAdornment={(<HelperAdornment
              error={touched.participation && errors.participation}
            />)}
          />
          <ButtonWrapper>
            <TextButton
              innerText={isSubmitting ? "Sending..." : sendButton}
              type="submit"
              disabled={isSubmitting}
            />
          </ButtonWrapper>
        </FormWrapper>
      </AppBarWrapper>
      <Table rowData={rowData} />
    </span>
  )
}

export { AppBar }
