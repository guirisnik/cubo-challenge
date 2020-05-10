import { css, styled } from 'modules/Styles'

const inputField = () => css`
  width: 100%
`

export const InputField = styled.span`
  ${inputField}
`

const styledInput = () => css`
  height: 40px;
  border: none;
  border-radius: 2px;
  padding-left: 15px;
  width: 100%;
  outline: none;
  border: 1px solid #0000FF00;
  box-shadow: 0 0 5px #0000FF00;
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 5px #0000FFAA;
    border: 1px solid #0000FFAA;
  }
`

export const StyledInput = styled.input`
  ${styledInput}
`
