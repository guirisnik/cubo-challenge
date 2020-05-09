import React from 'react'
import { string } from 'prop-types'
import { StyledButton } from './button.style'


const propTypes = {
  innerText: string,
}

const TextButton = ({ innerText }) => {
  return (
    <StyledButton> { innerText } </StyledButton>
  )
}

TextButton.propTypes = propTypes

export { TextButton }
