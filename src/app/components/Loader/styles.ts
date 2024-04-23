import styled from 'styled-components';

export const LoaderStyled = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: 0;
  pointer-events: none;

  &.-isLoading {
    opacity: 1;
    pointer-events: auto;
    z-index: 18;
  }
`;