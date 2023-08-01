import { FC } from 'react'

import type { LayoutInterface } from './types'
import Header from './Header'
import { StyledContent } from './_Layout'

const Layout: FC<LayoutInterface> = ({ children, isFullWidth, hasXSpace = true }) => {
  return (
    <div>
      <Header />
      <StyledContent hasXSpace={hasXSpace} isFullWidth={isFullWidth}>
        {children}
      </StyledContent>
    </div>
  )
}

export default Layout
