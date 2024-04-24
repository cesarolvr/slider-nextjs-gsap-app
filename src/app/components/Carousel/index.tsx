"use client";

import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { MouseEvent, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

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

// Handlers
import { handleScrollTo } from "./handlers";
import { useMouseMovement } from "./useMouseMovement";

// Types
import { CarouselParams, CarouselItemType } from "./types";

const Carousel = ({
  activeItem,
  handleActiveItem,
  slides,
  setLiveProgress,
}: CarouselParams): React.ReactNode => {
  const [timeline, setTimeline]: Array<any> = useState(null);
  const { handleMouse, XAxisMovement, XAxisMovementDelayed, YAxisMovement } =
    useMouseMovement();

  const goNext = (current: number): null => {
    if (current === slides.length - 1) {
      handleScrollTo(timeline, `item-0`);
      handleActiveItem(0);
      return null;
    }
    handleScrollTo(timeline, `item-${current + 1}`);
    handleActiveItem(current + 1);

    return null;
  };

  const goPrev = (current: number): null => {
    if (current === 0) {
      handleScrollTo(timeline, `item-${slides.length - 1}`);
      handleActiveItem(slides.length - 1);
      return null;
    }

    handleScrollTo(timeline, `item-${current - 1}`);
    handleActiveItem(current - 1);
    return null;
  };

  const InitCarousel = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const body: HTMLBodyElement | null = document.querySelector("body");
    const trackWidth = body ? body.scrollWidth : 0;

    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".carouselContainer",
          pin: true,
          pinSpacing: false,
          start: "top top",
          endTrigger: "body",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          scrub: true,
          onUpdate: ({ progress }) => {
            setLiveProgress(Math.round(progress * 100));
          },
        },
      })
      .add(() => handleActiveItem(0))
      .to(".carouselItem", { delay: 1, scale: 0.9, borderRadius: "20px" })
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 1}px` })
      .add(() => handleActiveItem(0))
      .add(() => handleActiveItem(1))
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .addLabel("item-1")
      .to(".carouselItem", { delay: 1, scale: 0.9, borderRadius: "20px" })
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 2}px` })
      .add(() => handleActiveItem(1))
      .add(() => handleActiveItem(2))
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .addLabel("item-2")
      .to(".carouselItem", { delay: 1, scale: 0.9, borderRadius: "20px" })
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 3}px` })
      .add(() => handleActiveItem(2))
      .add(() => handleActiveItem(3))
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .addLabel("item-3")
      .to(".carouselItem", { delay: 1, scale: 0.9, borderRadius: "20px" })
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 4}px` })
      .add(() => handleActiveItem(3))
      .add(() => handleActiveItem(4))
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .addLabel("item-4")
      .addLabel("item-5");

    setTimeline(timeline);
  };

  useEffect(() => {
    InitCarousel();
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
