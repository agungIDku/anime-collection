import styled from "@emotion/styled";

import styleConst from "@constants/style";

import type { ButtonInterface } from "./type";


export const StyledButton = styled.button<ButtonInterface>`
  padding: 12px 10px;
  width: ${({ isFullWidth }) => isFullWidth ? '100%' : 'auto'};
  background-color: ${({ variant }) => variant ? styleConst.button[variant] : styleConst.button.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8
  }
`
