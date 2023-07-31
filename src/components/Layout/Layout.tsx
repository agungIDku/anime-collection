import { FC } from 'react'

import type { LayoutInterface } from './types'
import Header from './Header'
import { StyledContent } from './_Layout'

const Layout: FC<LayoutInterface> = ({ children, isFullWidth }) => {
  return (
    <div>
      <Header />
      <StyledContent isFullWidth={isFullWidth}>
        {children}
      </StyledContent>
    </div>
  )
}

export default Layout
