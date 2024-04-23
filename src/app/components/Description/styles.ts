import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DescriptionStyled = styled(motion.section)`
  position: absolute;
  bottom: 100px;
  right: 50px;
  z-index: 5;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 109px;
  font-size: 10px;
  
  @media (min-width: 1024px) {
    bottom: 50px;
    right: 100px;
  }
`;

export const Author = styled(motion.h2)`
  text-align: left;
  font-size: 10px;
  margin-top: 0;
`;

export const Time = styled(motion.time)`
  margin-bottom: 15px;
  text-align: right;
`;

export const Button = styled(motion.a)`
    width: 100%;
    height: 100%;
    padding: 12px;
    background-color: white;
    color: black;
    text-align: center;
    border-radius: 24px;
    font-weight: bold;
    margin-top: 10px;
    position: relative;
    display: block;
    overflow: hidden;
    border: 1px solid white;

    span {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: black;
      z-index: 4;
      transform: scaleX(0);
      transform-origin: center left;
      transition: transform 0.3s ease;
    }

    strong {
      position: relative;
      z-index: 5;
    }

    &:hover {
      border: 1px solid white;

      strong {
        animation: 2s linear infinite running pingPingButtonText alternate;
        display: inline-block;
      }
    }
`;