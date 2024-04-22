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
  const isClient = !!(typeof window !== "undefined");
  const savedActiveItem = isClient
    ? window.localStorage.getItem("activeItem")
    : null;
  if (typeof window !== "undefined") {
  }

  const [activeItem, setActiveItem]: Array<number | Function> = useState(
    savedActiveItem !== null ? parseInt(savedActiveItem) : 0
  );

  useEffect(() => {
    window.localStorage.setItem("activeItem", activeItem.toString());
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

    let sections = gsap.utils.toArray(".carouselItem");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".carouselContainer",
        pin: true,
        scrub: 1,
        snap: { snapTo: 1 / (sections.length - 1), duration: 0.05 },
        end: "+=3500",
      },
    });

    // // define movement of panels
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".carouselContainer",
    //     pin: true,
    //     start: "50% top",
    //     end: "bottom 50%",
    //     // scrub: 1,
    //     // snap: {
    //     //   snapTo: "transition", // snap to the closest label in the timeline
    //     //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     //   delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    //     // },
    //     markers: true,
    //   },
    // });

    // // animate to second panel
    // // tl.to("#track", { duration: 1, z: -150 }); // move back in 3D space
    // tl.to("#track", { x: "-20%" }); // move in to first panel
    // // tl.to("#track", { duration: 1, z: 0 }); // move back to origin in 3D space
    // tl.addLabel("transition");
    // // animate to third panel
    // // tl.to("#track", { duration: 1, z: -150, delay: 1 });
    // tl.to("#track", { x: "-40%" });
    // // tl.to("#track", { duration: 1, z: 0 });
    // tl.addLabel("transition");
    // // animate to forth panel
    // // tl.to("#track", { duration: 1, z: -150, delay: 1 });
    // tl.to("#track", { x: "-60%" });
    // // tl.to("#track", { duration: 1, z: 0 });
    // tl.addLabel("transition");
    // // animate to fifth panel
    // // tl.to("#track", { duration: 1, z: -150, delay: 1 });
    // tl.to("#track", { x: "-80%" });
    // // tl.to("#track", { duration: 1, z: 0 });
    // tl.addLabel("transition");
  };

  useEffect(() => {
    setTimeout(() => {
      InitCarousel();
    }, 10);
  }, []);

  return (
    <>
      <CarouselStyled onMouseMove={handleMouse}>
        <div className="carouselContainer">
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
