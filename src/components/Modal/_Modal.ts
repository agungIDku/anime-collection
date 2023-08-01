import styled from "@emotion/styled";

import styleConst from "@constants/style";

export const StyledContainerOverlay = styled.div`
  position: fixed;
  left: 0
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: ${styleConst.color.white};
  border-radius: 8px;
  overflow: hidden;
`

export const StyledHeader = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${styleConst.color.disabled};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    cursor: pointer;
    &:hover {
      opacity: 0.7
    }
  }
`

export const StyledContent = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${styleConst.color.disabled}
`
