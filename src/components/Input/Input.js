import React from "react"
import { string, func } from "prop-types"
import { StyledInput } from "./input.style"

const propTypes = {
	placeholder: string,
	onChange: func,
	value: string,
}

const Input = ({ placeholder, onChange, value }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

Input.propTypes = propTypes

export { Input }
