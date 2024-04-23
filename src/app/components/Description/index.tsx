"use client";

import { motion } from "framer-motion";

// Font
import { helvetica } from "@/fonts";

// Styles
import { DescriptionStyled, Author, Time, Button } from "./styles";

type DescriptionParams = {
  author: string;
  when: string;
  link: string;
};

const Description = ({
  author,
  when,
  link,
}: DescriptionParams): React.ReactNode => {
  return (
    <DescriptionStyled className={helvetica.className}>
      <Author
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          stiffness: 400,
          damping: 40,
        }}
      >
        {author}
      </Author>
      <Time
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          stiffness: 400,
          damping: 40,
        }}
      >
        {when}
      </Time>
      <Button
        href={link}
        target="_blank"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          stiffness: 400,
          damping: 40,
        }}
      >
        <span />
        <strong>have a look</strong>
      </Button>
    </DescriptionStyled>
  );
};

export default Description;
