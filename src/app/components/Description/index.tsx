"use client";

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
      <Author>{author}</Author>
      <Time>{when}</Time>
      <Button href={link}>have a look</Button>
    </DescriptionStyled>
  );
};

export default Description;
