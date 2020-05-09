import styled from '@emotion/styled'
import { css } from '@emotion/core'

breakpoints [1920, 600]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export { styled, css, mq }