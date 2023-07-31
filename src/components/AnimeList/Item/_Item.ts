import styled from "@emotion/styled";

import styleConst from "@constants/style";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: -webkit-min-content auto;
  grid-template-rows: min-content auto;
  position: relative;
  width: 190px;
  position: relative;
  transition: transform .2s;

  &:hover {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.3);
    transition: all 200ms ease-in;
    z-index: 100;
    background-image: linear-gradient(
      40deg,
      hsl(210deg 68% 36%) 0%,
      hsl(209deg 58% 42%) 6%,
      hsl(208deg 52% 48%) 11%,
      hsl(207deg 55% 55%) 17%,
      hsl(206deg 64% 61%) 23%,
      hsl(205deg 77% 67%) 28%,
      hsl(199deg 89% 68%) 34%,
      hsl(187deg 82% 53%) 40%,
      hsl(175deg 70% 52%) 46%,
      hsl(149deg 63% 65%) 52%,
      hsl(93deg 58% 68%) 58%,
      hsl(54deg 68% 64%) 64%,
      hsl(46deg 87% 69%) 70%,
      hsl(47deg 87% 71%) 76%,
      hsl(48deg 87% 74%) 82%,
      hsl(48deg 88% 77%) 88%,
      hsl(49deg 89% 80%) 94%,
      hsl(50deg 91% 83%) 100%
    );
    border-radius: 6px;
    overflow: hidden;

    & div {
      display: flex;
      justify-content: space-between;
    }

    & .desc > p {
      padding: 0 8px;
      color: ${styleConst.color.white};
    }
  }
`

export const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  height: 265px;
  width: 100%;
  border-radius: 6px;
`

export const StyledTitle = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > p {
    height: 36px;
  }
`

export const StyledInfo = styled.div`
  display: none;
  gap: 8px;
  padding: 0 8px;
`
