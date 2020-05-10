import React from 'react'
import { string } from 'prop-types'
import { HelperWrapper } from 'components/Wrappers'

const propTypes = {
  error: string.isRequired,
}

const HelperAdornment = ({ error }) => {
  return (
    <HelperWrapper>
      {error}
    </HelperWrapper>
  )
}

HelperAdornment.propTypes = propTypes

export { HelperAdornment }
