"use client";

// Font
import { DescriptionStyled, Author, Time, Button } from "./styles";
import { helvetica } from "@/fonts";

type DescriptionParams = {
  author: string;
  when: string;
  link: string;
};

export const Description = ({
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
          delay: 3.5,
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
          delay: 3.6,
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
          delay: 3.7,
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
