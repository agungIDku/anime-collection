import styled from "@emotion/styled";
import styleConst from "@constants/style";

import { PaginationItemInterface } from './type'

export const StyledContainer = styled.div`
  display: flex;
  gap: 4px;
`

export const StyledItem = styled.div<PaginationItemInterface>`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDisabled }) => isDisabled ? styleConst.color.disabled : styleConst.color.white };
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer' };
  border-radius: 6px;

  ${({ isDisabled }) => !isDisabled ? `
    &:hover {
      background-color: ${styleConst.color.primary};

      & path {
        fill: ${styleConst.color.white};
      }
    }
  ` : '' }
`
