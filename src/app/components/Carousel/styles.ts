import { motion } from "framer-motion";
import styled from "styled-components";

export const CarouselStyled = styled(motion.div)`
  width: 100vw;

  .track {
    width: 500vw;
    height: 100svh;
    display: flex;
    justify-content: start;
    flex-wrap: nowrap;
    will-change: transform;
  }
`;
