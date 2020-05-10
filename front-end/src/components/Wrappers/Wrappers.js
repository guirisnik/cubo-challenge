import { css, styled } from 'modules/Styles';


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
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FormWrapper = styled.form`
  ${formWrapper}
`

const inputWrapper = () => css`
  position: relative;
  margin: 0px 16px;
  flex-grow: 3;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const InputWrapper = styled.span`
  ${inputWrapper}
`

const buttonWrapper = () => css`
  margin: 0px 16px;
  height: 100%;
`

export const ButtonWrapper = styled.span`
  ${buttonWrapper}
`

const iconWrapper = () => css`
  position: absolute;
  height: 16px;
  width: 16px;
`

export const IconWrapper = styled.span`
  ${iconWrapper}
`

const helperWrapper = () => css`
  position: absolute;
  display: block;
  width: 100%;
  padding: 5px;
  color: crimson;
  font-family: 'Roboto', sans-serif;
  font-size: 9pt;
`

export const HelperWrapper = styled.span`
  ${helperWrapper}
`
