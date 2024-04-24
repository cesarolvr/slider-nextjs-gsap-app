"use client";

import { type MouseEvent, useEffect } from "react";

// Styles
import { CarouselStyled } from "./styles";

// Hooks
import { useCarouselHandlers } from "./useCarouselHandlers";
import { useMouseMovement } from "./useMouseMovement";

// Types
import { type CarouselParams } from "./types";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({
  activeItem,
  handleActiveItem,
  slides,
  setLiveProgress,
}: CarouselParams): React.ReactNode => {
  const { handleMouse, XAxisMovement, XAxisMovementDelayed, YAxisMovement } =
    useMouseMovement();

  const { initCarousel, handleScrollTo, goNext, goPrev } = useCarouselHandlers({
    handleActiveItem,
    setLiveProgress,
    slides,
  });

  useEffect(() => {
    initCarousel();
  }, []);

  return (
    <CarouselStyled
      onMouseMove={(event: MouseEvent) => handleMouse(event)}
      className="carouselContainer"
    >
      <div className="track">
        {slides.map((item, index) => {
          const isFirstItem = index === 0;
          const isLastItem = index === slides.length - 1;

          const previewOfPrev =
            slides[isFirstItem ? slides.length - 1 : index - 1].featuredImage;

          const previewOfNext =
            slides[isLastItem ? 0 : index + 1].featuredImage;

          return (
            <CarouselItem
              key={`${index}-${item.id}`}
              slide={{ ...item, previewOfPrev, previewOfNext }}
              index={index}
              goNext={goNext}
              goPrev={goPrev}
              handleScrollTo={handleScrollTo}
              handleActiveItem={handleActiveItem}
              options={{
                activeItem,
                rawList: slides,
                XAxisMovement,
                XAxisMovementDelayed,
                YAxisMovement,
              }}
            />
          );
        })}
      </div>
    </CarouselStyled>
  );
};
