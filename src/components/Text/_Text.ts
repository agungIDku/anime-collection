import styled from '@emotion/styled'

import styleConst from '@constants/style'

import type { ParagraphInterface } from './types'

export const Paragraph = styled.p<ParagraphInterface>`
  font-size: ${({ variant }) => styleConst.fontSize[variant || 'body2']};
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color }) => styleConst.color[color || 'main']};
  font-weight: ${({ weight }) => styleConst.weight[weight || 'normal']};
  line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
`
