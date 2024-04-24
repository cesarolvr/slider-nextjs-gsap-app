"use client";
import { motion } from "framer-motion";

// Styles
import { HeaderStyled, LogoWrapper } from "./styles";

export const Header = (): React.ReactNode => {
  return (
    <HeaderStyled>
      <LogoWrapper>
        <motion.a
          href="#"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ stiffness: 400, damping: 40, delay: 0.2 }}
        >
          XYZ Photography
        </motion.a>
      </LogoWrapper>
    </HeaderStyled>
  );
};
