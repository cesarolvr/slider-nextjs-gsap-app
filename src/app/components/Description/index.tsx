"use client";

type DescriptionParams = {
  author: string;
  when: string;
  link: string;
};

const Description = ({
  author = "Johanna Hobel for vouge",
  when = "JUN 2019",
  link = "#",
}: DescriptionParams): React.ReactNode => {
  return (
    <section>
      <h2>{author}</h2>
      <time>{when}</time>
      <a href={link}>have a look</a>
    </section>
  );
};

export default Description;
