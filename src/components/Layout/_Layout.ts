import styled from "@emotion/styled"

import type { LayoutContentInterface } from './types'

export const StyledContent = styled.div<LayoutContentInterface>`
  width: 100%;
  max-width: ${({ isFullWidth }) => !!isFullWidth ? '100%' : '1050px' };
  margin: 0 auto;
  min-height: calc(100vh - 84px);
`
