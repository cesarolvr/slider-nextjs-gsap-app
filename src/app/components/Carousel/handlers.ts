import gsap from "gsap";

export const handleScrollTo = (timeline: GSAPTimeline, label: string): void => {
  if (!timeline) return;
  gsap.to(window, {
    scrollTo: timeline?.scrollTrigger?.labelToScroll(label),
    duration: 1,
  });
};