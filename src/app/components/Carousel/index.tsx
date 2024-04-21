"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

// Data
import { featuredItems } from "@/data";

// Components
import Description from "../Description";
import Image from "next/image";

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
} from "./styles";

const Carousel = (): React.ReactNode => {
  const savedActiveItem = localStorage.getItem("activeItem");

  const [activeItem, setActiveItem]: Array<number | Function> = useState(
    savedActiveItem !== null ? parseInt(savedActiveItem) : 0
  );

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem.toString());
  }, [activeItem]);

  const goNext = (current: number): null => {
    if (current === featuredItems.length - 1) {
      setActiveItem(0);
      return null;
    }
    setActiveItem(current + 1);

    return null;
  };

  const goPrev = (current: number): null => {
    if (current === 0) {
      setActiveItem(featuredItems.length - 1);
      return null;
    }
    setActiveItem(current - 1);

    return null;
  };

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 0], [5, -5]);
  const rotateY = useTransform(x, [0, 2000], [-15, 15]);

  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <CarouselStyled onMouseMove={handleMouse}>
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
              className={classNames({
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
                    delay: 0.3,
                    stiffness: 400,
                    damping: 40,
                  }}
                >
                  <PrevImage src={previewOfPrev} alt="" />
                </PrevThumbnail>
                <FeaturedItem style={{ rotateX, rotateY }}>
                  <ImageWrapper>
                    <Overlay>
                      <Title>
                        <TitleOverlay>
                          <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              ease: "easeInOut",
                              duration: 0.7,
                              stiffness: 400,
                              damping: 40,
                              delay: 0.7,
                            }}
                          >
                            {title[0]}
                          </motion.div>
                        </TitleOverlay>
                        <TitleOverlay>
                          <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              ease: "easeInOut",
                              duration: 0.7,
                              stiffness: 400,
                              damping: 40,
                              delay: 0.7,
                            }}
                          >
                            {title[1]}
                          </motion.div>
                        </TitleOverlay>
                      </Title>
                      <CarouselControl
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 1.1,
                          stiffness: 400,
                          damping: 40,
                        }}
                      >
                        <p className={helvetica.className}>
                          {(activeItem + 1).toString()} of{" "}
                          {featuredItems.length}
                        </p>
                        <div className="dots">
                          {featuredItems.map((_, index) => {
                            return (
                              <div
                                onClick={() => setActiveItem(index)}
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
                        delay: 0.3,
                        stiffness: 400,
                        damping: 40,
                      }}
                    >
                      <FeaturedImage src={featuredImage} alt="" />
                    </FeaturedImageWrapper>
                    <TitleOutline>
                      <div>
                        <motion.div
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.7,
                            stiffness: 400,
                            damping: 40,
                            delay: 0.7,
                          }}
                        >
                          {title[0]}
                        </motion.div>
                      </div>
                      <div>
                        <motion.div
                          initial={{ x: -200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.7,
                            stiffness: 400,
                            damping: 40,
                            delay: 0.7,
                          }}
                        >
                          {title[1]}
                        </motion.div>
                      </div>
                    </TitleOutline>
                  </ImageWrapper>
                </FeaturedItem>
                <NextThumbnail
                  onClick={() => goNext(index)}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.4,
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
    </CarouselStyled>
  );
};

export default Carousel;
