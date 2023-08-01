import styled from "@emotion/styled"
import styleConst from "@constants/style"

import type { AnimeImageCover } from './type'

export const StyledBanner = styled.div`
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
`

export const StyledContent = styled.div`
  width: auto;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 590px) {
    flex-direction: column;
  }
`

export const StyledCover = styled.img<AnimeImageCover>`
  position: relative;
  top: ${({ anyBanner }) => anyBanner ? '-150px' : '0'};
  height: 300px;
  border-radius: 4px;
  ${({ anyBanner }) => !anyBanner ? `
    margin-top: 24px;
  ` : ''};

  @media (max-width: 590px) {
    top: -340px
  }
`

export const StyledLeft = styled.div<AnimeImageCover>`
  ${({ anyBanner }) => anyBanner ? `
    & button {
      position: relative;
      top: -140px;

      @media (max-width: 590px) {
        top: -300px
      }
    }
  ` : ''};

  @media (max-width: 1030px) {
    padding-left: 12px
  }
  @media (max-width: 590px) {
    padding-right: 12px;
    padding-top: 12px;
    height: 70px
  }
`

export const StyledAbout = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & table {
    & td {
      padding-top: 16px;
      & p:first-of-type {
        margin-bottom: 6px;
      }
    }
  }

  @media (max-width: 1030px) {
    padding-right: 12px
  }

  @media (max-width: 590px) {
    padding: 12px
  }
`

export const StyledTagContainer = styled.div`
  margin-top: 16px;
`

export const StyledTagItem = styled.div`
  border-radius: 2px;
  background-color: ${styleConst.color.white};
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  margin-top: 10px;
  align-items: center;
  flex: 0 1 calc(23% - 8px);

  @media (max-width: 1030px) {
    flex: none;
  }
`

export const StyledContainerTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const StyledCollection = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    gap: 4px;
  }
`
