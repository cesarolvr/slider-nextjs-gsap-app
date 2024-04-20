"use client";

import { useState } from "react";

// Data
import { featuredItems } from "@/data";

// Components
import Description from "../Description";

// Styles
import {
  CarouselStyled,
  CarouselItem,
  CarouselItemLayer,
  CarouselItemContent,
  CarouselControl,
  NextThumbnail,
  PrevThumbnail,
  FeaturedItem,
  ImageWrapper,
  Overlay,
  Title,
  TitleOutline,
} from "./styles";
import Image from "next/image";

const Carousel = (): React.ReactNode => {
  const [activeItem, setActiveItem]: Array<Number | Function> = useState(0);

  return (
    <CarouselStyled>
      {featuredItems.map(
        (
          { title, id, featuredImage, backgroundImage, author, when, link },
          index
        ) => {
          const isFirstItem = index === 0;
          const isLastItem = index === featuredItems.length - 1;

          const previewOfPrev =
            featuredItems[isFirstItem ? featuredItems.length - 1 : index - 1]
              .featuredImage;

          const previewOfNext =
            featuredItems[isLastItem ? 0 : index + 1].featuredImage;

          return (
            <CarouselItem
              key={`${index}-${id}`}
              $backgroundImage={backgroundImage}
            >
              <CarouselItemLayer />
              <CarouselItemContent>
                <PrevThumbnail>
                  <Image src={previewOfPrev} alt="" />
                </PrevThumbnail>
                <FeaturedItem>
                  <ImageWrapper>
                    <Overlay>
                      <Title>{title}</Title>
                    </Overlay>
                    <Image src={featuredImage} alt="" />
                    <TitleOutline>{title}</TitleOutline>
                  </ImageWrapper>
                </FeaturedItem>
                <NextThumbnail>
                  <Image src={previewOfNext} alt="" />
                </NextThumbnail>
              </CarouselItemContent>
              <Description author={author} when={when} link={link} />
            </CarouselItem>
          );
        }
      )}
      <CarouselControl>
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
      </CarouselControl>
    </CarouselStyled>
  );
};

export default Carousel;
