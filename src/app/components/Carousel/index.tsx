"use client";

import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Data
import { featuredItems } from "@/data";

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

const Carousel = (): React.ReactNode => {
  const [activeItem, setActiveItem]: Array<number | Function> = useState(0);
  const [timeline, setTimeline]: Array<GSAPTimeline | Function | null> =
    useState(null);

  useEffect(() => {
    const savedActiveItem = window.localStorage.getItem("activeItem") || 0;

    console.log(savedActiveItem);

    handleActiveItem(parseInt(savedActiveItem));
  }, []);

  const handleActiveItem = (index) => {
    setActiveItem(index);
    window.localStorage.setItem("activeItem", index);
  };

  const goNext = (current: number): null => {
    if (current === featuredItems.length - 1) {
      timeline.seek(`item-0`);
      handleActiveItem(0);
      return null;
    }
    console.log({ timeline, gsap, st: timeline.scrollTrigger });
    gsap.to(window, {
      scrollTo: timeline.scrollTrigger.labelToScroll(`item-${current + 1}`),
    });
    handleActiveItem(current + 1);
    

    return null;
  };

  const goPrev = (current: number): null => {
    if (current === 0) {
      handleActiveItem(featuredItems.length - 1);
      return null;
    }
    handleActiveItem(current - 1);

    return null;
  };

  const x = useMotionValue(2);
  const y = useMotionValue(2);

  const rotateY = useTransform(y, [2000, 0], [10, -10]);
  const rotateX = useTransform(x, [0, 2000], [-10, 10]);
  const rotateXDelayed = useTransform(x, [0, 2000], [-15, 15]);

  const handleMouse = (event: MouseEvent) => {
    const target: HTMLElement = event?.currentTarget;
    const rect: DOMRect | null = target.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const InitCarousel = () => {
    gsap.registerPlugin(ScrollTrigger);

    const track = document.querySelector(".track");
    const container = document.querySelector(".carouselContainer");
    const trackWidth = track.scrollWidth;
    const innerWidth = window.innerWidth;

    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".track",
          pin: true,
          pinSpacing: false,
          start: "top top",
          end: () => "+=" + (trackWidth - innerWidth),
          scrub: true,
          markers: true,
        },
      })
      .addLabel("item-0")
      .to(".carouselItem", { scale: 0.9, borderRadius: "20px" })
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 1}px` })
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .to(".carouselItem", { scale: 0.9, borderRadius: "20px" })
      .addLabel("item-1")
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 2}px` })
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .to(".carouselItem", { scale: 0.9, borderRadius: "20px" })
      .addLabel("item-2")
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 3}px` })
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .to(".carouselItem", { scale: 0.9, borderRadius: "20px" })
      .addLabel("item-3")
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 4}px` })
      .to(".carouselItem", { scale: 1, borderRadius: "0px" })
      .to(".carouselItem", { scale: 0.9, borderRadius: "20px" })
      .addLabel("item-4")
      .to(".track", { ease: "none", x: `-${(trackWidth / 5) * 5}px` });

    setTimeline(timeline);
  };

  useEffect(() => {
    setTimeout(() => {
      InitCarousel();
    }, 10);
  }, []);

  return (
    <>
      <CarouselStyled onMouseMove={handleMouse} className="carouselContainer">
        <div className="track">
          {featuredItems.map(
            (
              { title, id, featuredImage, backgroundImage, author, when, link },
              index
            ) => {
              const isFirstItem = index === 0;
              const isLastItem = index === featuredItems.length - 1;

              const previewOfPrev =
                featuredItems[
                  isFirstItem ? featuredItems.length - 1 : index - 1
                ].featuredImage;

              const previewOfNext =
                featuredItems[isLastItem ? 0 : index + 1].featuredImage;

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
                        delay: 0.3,
                        stiffness: 400,
                        damping: 40,
                      }}
                    >
                      <PrevImage src={previewOfPrev} alt="" />
                    </PrevThumbnail>
                    <FeaturedItem
                      style={{ x: rotateX, y: rotateY, rotateY, rotateX }}
                    >
                      <ImageWrapper>
                        <Overlay>
                          <Title>
                            <TitleOverlay>
                              <TitleCursorWrapper style={{ x: rotateX }}>
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
                              </TitleCursorWrapper>
                            </TitleOverlay>
                            <TitleOverlay>
                              <TitleCursorWrapper style={{ x: rotateXDelayed }}>
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
                              </TitleCursorWrapper>
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
                              {activeItem + 1} of {featuredItems.length}
                            </p>
                            <div className="dots">
                              {featuredItems.map((_, index) => {
                                return (
                                  <div
                                    onClick={() => handleActiveItem(index)}
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
                          <TitleCursorWrapper style={{ x: rotateX }}>
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
                          </TitleCursorWrapper>
                          <TitleCursorWrapper style={{ x: rotateXDelayed }}>
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
                          </TitleCursorWrapper>
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
        </div>
      </CarouselStyled>
      {/* <div style={{ height: "100vh" }}>div</div> */}
    </>
  );
};

export default Carousel;
