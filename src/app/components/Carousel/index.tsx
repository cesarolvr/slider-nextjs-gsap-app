"use client";

import classNames from "classnames";
import { MouseEvent, useEffect } from "react";
import { EventInfo, motion } from "framer-motion";

// Components
import Description from "../Description";

// Fonts
import { helvetica } from "@/fonts";

// Styles
import {
  CarouselStyled,
  CarouselItem,
  CarouselItemLayer,
  CarouselItemContent,
  CarouselControl,
  NextThumbnail,
  PrevThumbnail,
  PrevImage,
  NextImage,
  FeaturedItem,
  ImageWrapper,
  Overlay,
  Title,
  TitleOutline,
  TitleOverlay,
  FeaturedImage,
  FeaturedImageWrapper,
  TitleCursorWrapper,
} from "./styles";

// Hooks
import useCarouselHandlers from "./useCarouselHandlers";
import useMouseMovement from "./useMouseMovement";

// Types
import { CarouselParams, CarouselItemType } from "./types";

const Carousel = ({
  activeItem,
  handleActiveItem,
  slides,
  setLiveProgress,
}: CarouselParams): React.ReactNode => {
  const { handleMouse, XAxisMovement, XAxisMovementDelayed, YAxisMovement } =
    useMouseMovement();

  const { handleScrollTo, goNext, goPrev, timeline, initCarousel } =
    useCarouselHandlers({
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
        {slides.map(
          (
            {
              title,
              id,
              featuredImage,
              backgroundImage,
              author,
              when,
              link,
            }: CarouselItemType,
            index
          ) => {
            const isFirstItem = index === 0;
            const isLastItem = index === slides.length - 1;

            const previewOfPrev =
              slides[isFirstItem ? slides.length - 1 : index - 1].featuredImage;

            const previewOfNext =
              slides[isLastItem ? 0 : index + 1].featuredImage;

            return (
              <CarouselItem
                key={`${index}-${id}`}
                $backgroundImage={backgroundImage}
                className={classNames("carouselItem", {
                  "-active": index === activeItem,
                  "-last": isLastItem,
                })}
              >
                <CarouselItemLayer />
                <CarouselItemContent>
                  <PrevThumbnail
                    onClick={() => goPrev(index)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 3.3,
                      stiffness: 400,
                      damping: 40,
                    }}
                  >
                    <PrevImage src={previewOfPrev} alt="" />
                  </PrevThumbnail>
                  <FeaturedItem
                    style={{
                      x: XAxisMovement,
                      y: YAxisMovement,
                      rotateY: YAxisMovement,
                      rotateX: YAxisMovement,
                    }}
                  >
                    <ImageWrapper>
                      <Overlay>
                        <Title>
                          <TitleOverlay>
                            <TitleCursorWrapper style={{ x: XAxisMovement }}>
                              <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                  ease: "easeInOut",
                                  duration: 0.7,
                                  stiffness: 400,
                                  damping: 40,
                                  delay: 3.7,
                                }}
                              >
                                {title[0]}
                              </motion.div>
                            </TitleCursorWrapper>
                          </TitleOverlay>
                          <TitleOverlay>
                            <TitleCursorWrapper
                              style={{ x: XAxisMovementDelayed }}
                            >
                              <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                  ease: "easeInOut",
                                  duration: 0.7,
                                  stiffness: 400,
                                  damping: 40,
                                  delay: 3.7,
                                }}
                              >
                                {title[1]}
                              </motion.div>
                            </TitleCursorWrapper>
                          </TitleOverlay>
                        </Title>
                        <CarouselControl
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 4.1,
                            stiffness: 400,
                            damping: 40,
                          }}
                        >
                          <p className={helvetica.className}>
                            {activeItem + 1} of {slides.length}
                          </p>
                          <div className="dots">
                            {slides.map((_, index) => {
                              return (
                                <div
                                  onClick={() => {
                                    handleScrollTo(timeline, `item-${index}`);
                                    handleActiveItem(index);
                                  }}
                                  key={index}
                                  className={classNames("dot", {
                                    "-active": activeItem === index,
                                  })}
                                />
                              );
                            })}
                          </div>
                        </CarouselControl>
                      </Overlay>
                      <FeaturedImageWrapper
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 3.3,
                          stiffness: 400,
                          damping: 40,
                        }}
                      >
                        <FeaturedImage src={featuredImage} alt="" />
                      </FeaturedImageWrapper>
                      <TitleOutline>
                        <TitleCursorWrapper style={{ x: XAxisMovement }}>
                          <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              ease: "easeInOut",
                              duration: 0.7,
                              stiffness: 400,
                              damping: 40,
                              delay: 3.7,
                            }}
                          >
                            {title[0]}
                          </motion.div>
                        </TitleCursorWrapper>
                        <TitleCursorWrapper style={{ x: XAxisMovementDelayed }}>
                          <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              ease: "easeInOut",
                              duration: 0.7,
                              stiffness: 400,
                              damping: 40,
                              delay: 3.7,
                            }}
                          >
                            {title[1]}
                          </motion.div>
                        </TitleCursorWrapper>
                      </TitleOutline>
                    </ImageWrapper>
                  </FeaturedItem>
                  <NextThumbnail
                    onClick={() => goNext(index)}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 3.4,
                      stiffness: 400,
                      damping: 40,
                    }}
                  >
                    <NextImage src={previewOfNext} alt="" />
                  </NextThumbnail>
                </CarouselItemContent>
                <Description author={author} when={when} link={link} />
              </CarouselItem>
            );
          }
        )}
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
