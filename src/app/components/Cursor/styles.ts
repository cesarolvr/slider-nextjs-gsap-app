import styled from "styled-components";

export const CursorStyled = styled.div`
  position: fixed;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  .cursor-center,
  .cursor-tail {
    opacity: 0;
  }

  .cursor-center {
    mix-blend-mode: difference;
    border-radius: 50px;
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: white;
    border: solid 1px #fff;
  }

  .cursor-tail {
    border-radius: 50px;
    position: absolute;
    width: 4px;
    height: 4px;
    mix-blend-mode: difference;

    svg {
      transform: rotate(-90deg);
    }
  }

  .cursor-center,
  .cursor-tail {
    top: 50%;
    left: 10%;
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .cursor-background {
    position: fixed;
    z-index: 14;
    top: 0;
    left: 0;
    fill: none;
    stroke-width: 2px;
    stroke: rgba(255, 255, 255, 0.3);
  }

  .cursor-progress {
    position: fixed;
    fill: none;
    stroke: white;
    z-index: 13;
    stroke-opacity: 1;
    stroke-dasharray: 100 100;
    stroke-linecap: round;
    stroke-width: 2px;
  }
`;
