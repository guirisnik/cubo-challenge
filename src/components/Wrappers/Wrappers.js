import { css, styled } from 'styles/Styles';


const layoutWrapper = () => css`
  display: flex;
  flex-direction: column;
`

export const LayoutWrapper = styled.div`
  ${layoutWrapper}
`

const appBarWrapper = () => css`
  padding: 40px;
  background-color: #00B8E8;
  display: flex;
  justify-content: center;
`

export const AppBarWrapper = styled.div`
  ${appBarWrapper}
`

const formWrapper = () => css`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FormWrapper = styled.form`
  ${formWrapper}
`

const inputWrapper = () => css`
  margin: 0px 16px;
  flex-grow: 3;
`

export const InputWrapper = styled.span`
  ${inputWrapper}
`

const buttonWrapper = () => css`
  margin: 0px 16px;
`

export const ButtonWrapper = styled.span`
  ${buttonWrapper}
`
