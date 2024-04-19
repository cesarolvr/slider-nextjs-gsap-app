"use client";

type CarouselItem = {
  backgroundImage: string;
  featuedImage: string;
  title: string;
  id: string;
  author: string;
  when: string;
  link: string;
};

const Carousel = (): React.ReactNode => {
  const featuredItems: Array<CarouselItem> = [
    {
      backgroundImage: "",
      featuedImage: "",
      id: "johana-hobel-for-vouge",
      title: "everyday flowers",
      author: "Johanna Hobel for vouge",
      when: "JUN 2019",
      link: "#",
    },
  ];

  return (
    <section>
      {featuredItems.map(({ title, id }, index) => {
        return (
          <div key={`${index}-${id}`}>
            <div>
              background layer
              <div>
                <div>prev preview</div>
                <div>
                  <h1>{title}</h1>
                </div>
              </div>
              <div>next preview</div>
            </div>
            <div></div>
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
