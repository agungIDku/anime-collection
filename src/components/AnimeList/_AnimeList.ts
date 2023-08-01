import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: grid;
  grid-gap: 12px 16px;
  grid-template-columns: repeat(auto-fill,190px);
  justify-content: space-between;

  @media (max-width: 625px) {
    grid-template-columns: repeat(auto-fill,160px);
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fill,85%);
    justify-content: center;
  }
`
