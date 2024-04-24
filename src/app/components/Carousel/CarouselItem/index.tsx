"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

// Components
import {
  CarouselItemStyled,
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
} from "../styles";
import { type CarouselItemComponentType } from "../types";
import { Description } from "@/app/components/Description";

// Fonts
import { helvetica } from "@/fonts";

// Styles

export const CarouselItem = ({
  index,
  handleActiveItem,
  handleScrollTo,
  goNext,
  goPrev,
  slide: {
    backgroundImage,
    title,
    featuredImage,
    previewOfNext,
    previewOfPrev,
    author,
    when,
    link,
  },
  options: {
    activeItem,
    XAxisMovement,
    XAxisMovementDelayed,
    YAxisMovement,
    rawList,
  },
}: CarouselItemComponentType): React.ReactNode => {
  return (
    <CarouselItemStyled
      $backgroundImage={backgroundImage}
      className={classNames("carouselItem", {
        "-active": index === activeItem,
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
                  {activeItem + 1} of {rawList.length}
                </p>
                <div className="dots">
                  {rawList.map((_, subIndex: number) => {
                    return (
                      <div
                        onClick={() => {
                          handleScrollTo(`item-${subIndex}`);
                          handleActiveItem(subIndex);
                        }}
                        key={subIndex}
                        className={classNames("dot", {
                          "-active": activeItem === subIndex,
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
    </CarouselItemStyled>
  );
};
