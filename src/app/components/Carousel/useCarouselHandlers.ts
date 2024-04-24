import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

// Types
import { type UseCarouselParams } from "./types";

export const useCarouselHandlers = ({
  handleActiveItem,
  slides,
  setLiveProgress,
}: UseCarouselParams) => {
  const [timeline, setTimeline]: Array<any> = useState(null);

  const handleScrollTo = (label: string): void => {
    if (!timeline) return;
    gsap.to(window, {
      scrollTo: timeline?.scrollTrigger?.labelToScroll(label),
      duration: 1,
    });
  };

  const goNext = (current: number): null => {
    if (current === slides.length - 1) {
      handleScrollTo(`item-0`);
      handleActiveItem(0);
      return null;
    }
    handleScrollTo(`item-${current + 1}`);
    handleActiveItem(current + 1);

    return null;
  };

  const goPrev = (current: number): null => {
    if (current === 0) {
      handleScrollTo(`item-${slides.length - 1}`);
      handleActiveItem(slides.length - 1);
      return null;
    }

    handleScrollTo(`item-${current - 1}`);
    handleActiveItem(current - 1);
    return null;
  };

  const initCarousel = () => {
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

  return {
    timeline,
    setTimeline,
    handleScrollTo,
    initCarousel,
    goNext,
    goPrev,
  };
};
