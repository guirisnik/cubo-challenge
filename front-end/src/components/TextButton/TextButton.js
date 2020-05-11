import React from 'react'
import { string, bool } from 'prop-types'
import { StyledButton } from './textButton.style'


const propTypes = {
  innerText: string,
  type: string.isRequired,
  disabled: bool,
}

const TextButton = ({ innerText, type, disabled = false }) => {
  return (
    <StyledButton type={type} disabled={disabled}> { innerText } </StyledButton>
  )
}

TextButton.propTypes = propTypes

export { TextButton }
