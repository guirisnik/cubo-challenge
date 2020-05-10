import React from 'react'
import { string, func, node } from 'prop-types'
import { StyledInput, InputField } from './input.style'
import { InputWrapper } from 'components/Wrappers'

const propTypes = {
  label: string,
  id: string,
  name: string,
	placeholder: string,
  value: string,
  onChange: func,
  onBlur: func,
  validationAdornment: node,
  helperAdornment: node,
}

const Input = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  validationAdornment,
  helperAdornment,
}) => {
  return (
    <InputWrapper>
      { validationAdornment }
      <InputField>
        <StyledInput
          label={label}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
        { helperAdornment }
      </InputField>
    </InputWrapper>
  )
}

Input.propTypes = propTypes

export { Input }
