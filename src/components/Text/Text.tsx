import { FC } from 'react'

import type { TextInterface } from './types'
import { Paragraph } from './_Text'

const Text: FC<TextInterface> = ({ children, ...props }) => {
  return <Paragraph data-testid="text" {...props}>{children}</Paragraph>
}

export default Text
