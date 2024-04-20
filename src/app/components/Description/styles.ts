import styled from 'styled-components';

export const DescriptionStyled = styled.section`
  position: absolute;
  bottom: 100px;
  right: 100px;
  z-index: 5;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 109px;
  font-size: 10px;
`;

export const Author = styled.h2`
  text-align: left;
  font-size: 10px;
  margin-top: 0;
`;

export const Time = styled.time`
  margin-bottom: 15px;
  text-align: right;
`;

export const Button = styled.a`
  background-color: white;
  padding: 12px;
  color: black;
  text-align: center;
  border-radius: 24px;
  font-weight: bold;
`;