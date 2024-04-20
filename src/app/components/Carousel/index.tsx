"use client";

import { useState } from "react";

// Data
import { featuredItems } from "@/data";

// Components
import Description from "../Description";

// Styles
import { CarouselStyled } from "./styles";

const Carousel = (): React.ReactNode => {
  const [activeItem, setActiveItem]: Array<Number | Function> = useState(0);

  return (
    <CarouselStyled>
      {featuredItems.map(
        ({ title, id, featuredImage, author, when, link }, index) => {
          return (
            <div key={`${index}-${id}`}>
              <div>
                background layer
                <div>
                  <div>prev preview</div>
                  <div>
                    <div>{featuredImage}</div>
                    <h1>{title}</h1>
                  </div>
                </div>
                <div>next preview</div>
              </div>
              <div>
                <Description author={author} when={when} link={link} />
              </div>
            </div>
          );
        }
      )}
      <div>
        <p>
          {activeItem.toString()} of {featuredItems.length}
        </p>
        <div>
          {[1, 2, 3, 4, 5].map((_, index) => {
            return (
              <div onClick={() => setActiveItem(index)} key={index}>
                dots
              </div>
            );
          })}
        </div>
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
