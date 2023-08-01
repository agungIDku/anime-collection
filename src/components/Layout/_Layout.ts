import styled from "@emotion/styled"

import type { LayoutContentInterface } from './types'

export const StyledContent = styled.div<LayoutContentInterface>`
  max-width: ${({ isFullWidth }) => !!isFullWidth ? '100%' : '1050px' };
  padding: ${({ hasXSpace }) => !!hasXSpace ? '0 12px' : '0' };
  margin: 0 auto;
  min-height: calc(100vh - 84px);
`
