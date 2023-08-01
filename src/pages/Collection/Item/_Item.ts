import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: -webkit-min-content auto;
  grid-template-rows: min-content auto;
  position: relative;
  width: 190px;
  position: relative;
  transition: transform .2s;
  background-color: #ffffff;
  border-radius: 6px;
  overflow: hidden;
`

export const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  height: 265px;
  width: 100%;
`

export const StyledTitle = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 8px;

  & svg:hover{
    cursor: pointer;
    opacity: 0.8
  }
`

export const StyledAction = styled.div`
  display: flex;
  align-items: center;
  gap: 4px
`
