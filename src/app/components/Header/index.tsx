"use client";

// Styles
import { HeaderStyled, LogoWrapper } from "./styles";

import { motion } from "framer-motion";

const Header = (): React.ReactNode => {
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

export default Header;
