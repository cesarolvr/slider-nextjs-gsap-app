import { StaticImageData } from 'next/image'

// Assets
import ftImage1 from '@/images/image01.jpg'
import bgImage1 from '@/images/image01@2x.jpg'
import ftImage2 from '@/images/image02.jpg'
import bgImage2 from '@/images/image02@2x.jpg'
import ftImage3 from '@/images/image03.jpg'
import bgImage3 from '@/images/image03@2x.jpg'
import ftImage4 from '@/images/image04.jpg'
import bgImage4 from '@/images/image04@2x.jpg'
import ftImage5 from '@/images/image05.jpg'
import bgImage5 from '@/images/image05@2x.jpg'

type CarouselItem = {
  backgroundImage: StaticImageData;
  featuredImage: StaticImageData;
  title: string;
  id: string;
  author: string;
  when: string;
  link: string;
};

export const featuredItems: Array<CarouselItem> = [
  {
    backgroundImage: bgImage1,
    featuredImage: ftImage1,
    id: "johana-hobel-for-vouge",
    title: "everyday flowers",
    author: "Johanna Hobel for vouge",
    when: "JUN 2019",
    link: "#",
  },
  {
    backgroundImage: bgImage2,
    featuredImage: ftImage2,
    id: "johana-hobel-for-wild",
    title: "the wilder night",
    author: "Johanna Hobel for WILD",
    when: "DEC 2019",
    link: "#",
  },
  {
    backgroundImage: bgImage3,
    featuredImage: ftImage3,
    id: "johana-hobel-for-channel",
    title: "smooth memories",
    author: "Johanna Hobel for Chanel",
    when: "FEB 2020",
    link: "#",
  },
  {
    backgroundImage: bgImage4,
    featuredImage: ftImage4,
    id: "johana-hobel-for-on",
    title: "the future universe",
    author: "Johanna Hobel for on",
    when: "APR 2020",
    link: "#",
  },
  {
    backgroundImage: bgImage5,
    featuredImage: ftImage5,
    id: "johana-hobel-for-si",
    title: "she was born urban",
    author: "Johanna Hobel for si",
    when: "DEC 2021",
    link: "#",
  }
]
