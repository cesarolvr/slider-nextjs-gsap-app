import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export type CarouselItemType = {
  backgroundImage: StaticImageData;
  featuredImage: StaticImageData;
  title: Array<string>;
  id: string;
  author: string;
  when: string;
  link: string;
};

export type CarouselItemComponentType = {
  index: number;
  handleActiveItem: Function;
  handleScrollTo: Function;
  goNext: Function;
  goPrev: Function;
  slide: {
    backgroundImage: StaticImageData;
    title: Array<string>;
    featuredImage: StaticImageData;
    previewOfNext: StaticImageData;
    previewOfPrev: StaticImageData;
    author: string;
    when: string;
    link: string;
  };
  options: {
    activeItem: number;
    XAxisMovement: MotionValue;
    XAxisMovementDelayed: MotionValue;
    YAxisMovement: MotionValue;
    rawList: Array<any>;
  };
};

export type UseCarouselParams = {
  handleActiveItem: Function;
  slides: Array<CarouselItemType>
  setLiveProgress: Function,
};

export type CarouselParams = {
  activeItem: number;
  handleActiveItem: Function;
  slides: Array<CarouselItemType>;
  setLiveProgress: Function;
};