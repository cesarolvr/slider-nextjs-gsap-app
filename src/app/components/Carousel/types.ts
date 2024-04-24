import { StaticImageData } from "next/image";

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

export type CarouselItemType = {
  backgroundImage: StaticImageData;
  featuredImage: StaticImageData;
  title: Array<string>;
  id: string;
  author: string;
  when: string;
  link: string;
};