import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DescriptionStyled = styled(motion.section)`
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
  background-color: white;
  padding: 12px;
  color: black;
  text-align: center;
  border-radius: 24px;
  font-weight: bold;
`;