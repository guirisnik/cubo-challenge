import { css, styled } from 'styles/Styles';


const styledInput = () => css`
  height: 40px;
  border: none;
  border-radius: 2px;
  padding-left: 15px;
  width: 100%;
`

export const StyledInput = styled.input`
  ${styledInput}
`
