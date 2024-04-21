import styled from 'styled-components';

export const CursorStyled = styled.div`
  position: fixed;
  z-index: 12;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  position: absolute;
  border-radius: 50%;
  clip-path: polygon(50% 0%, 50% 50%, 100% 50%, 100% 0%);
`;

export const CursorRingPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
`;

export const CursorCenter = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 13;
`;

