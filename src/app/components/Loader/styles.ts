import styled from 'styled-components';

export const LoaderStyled = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 18;
  background-color: black;
  pointer-events: none;
  height: 0;
  transition: height 0.6s ease;
  overflow: hidden;

  &.-isLoading {
    pointer-events: auto;
    height: 100vh;
  }
`;

export const LoaderContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LoaderTitle = styled.div`
  display: block;
  font-size: 100px;
  font-weight: normal;
  letter-spacing: 4px;
  line-height: 176px;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
  color: transparent;
  -webkit-text-stroke: 1px white;
  text-stroke: 1px white;
  text-shadow: none;
  text-wrap: nowrap;

  span {
    font-size: 100px;
  }

  @media (min-width: 1024px) {
    font-size: 220px;
  }
`;

export const LoaderPercentage = styled.div`
  display: block;
  font-size: 100px;
  font-weight: normal;
  letter-spacing: 4px;
  line-height: 176px;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
  color: white;

  @media (min-width: 1024px) {
    font-size: 220px;
  }
`;