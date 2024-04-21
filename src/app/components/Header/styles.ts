import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  padding: 20px;
`;

export const LogoWrapper = styled.div`
  overflow: hidden;

  a {
    display: inline-block;
  }
`;