import styled from '@emotion/styled'
import { css } from '@emotion/core'

const widthBreakpoints = [1920, 600]

const mq = widthBreakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export { styled, css, mq }