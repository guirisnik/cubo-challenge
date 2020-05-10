import React from 'react'
import { bool, string } from 'prop-types'
import { IconWrapper } from 'components/Wrappers'
import { Check, Cross } from 'icons'
import { failColor, successColor } from 'constants/Validation'

const propTypes = {
  error: string.isRequired,
  success: bool.isRequired
}

const ValidationAdornment = ({ error, success }) => {
  return (
    <IconWrapper>
      {Boolean(error)
        ? (<Cross fillColor={failColor} />)
        : (Boolean(success) && (<Check fillColor={successColor} />))
      }
    </IconWrapper>
  )
}

ValidationAdornment.propTypes = propTypes

export { ValidationAdornment }
