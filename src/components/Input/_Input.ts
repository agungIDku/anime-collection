import styled from "@emotion/styled";

import styleConst from "@constants/style";

import type { InputInterface } from './type'

export const StyledInput = styled.input<InputInterface>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${styleConst.color.disabled};
  width: ${({ isFullWidth }) => isFullWidth ? '-webkit-fill-available' : 'auto'};
  font-family: Overpass
`
