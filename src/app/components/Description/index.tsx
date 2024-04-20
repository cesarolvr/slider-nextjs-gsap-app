"use client";

// Font
import { helvetica } from "@/fonts";

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
    <section className={helvetica.className}>
      <h2>{author}</h2>
      <time>{when}</time>
      <a href={link}>have a look</a>
    </section>
  );
};

export default Description;
