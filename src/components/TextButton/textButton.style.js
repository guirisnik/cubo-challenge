import { css, styled } from 'styles/Styles';


const styledButton = () => css`
  height: 40px;
  border: 2px solid white;
  border-radius: 2px;
  background-color: #FFFFFF00;
  color: white;
  font-size: 15px;
  padding: 0px 40px;
  transition: background-color .5s;
  &:hover {
    background-color: #FFFFFF33;
  }
`

export const StyledButton = styled.button`
  ${styledButton}
`
