import { StaticImageData } from 'next/image';
import styled from 'styled-components';

export const CarouselStyled = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: scroll;
`;

export const CarouselItem = styled.div<{ $backgroundImage?: StaticImageData }>`
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;
  overflow: hidden;
  background-image: url(${props => props.$backgroundImage?.src});
  position: relative;
`;

export const CarouselItemLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  backdrop-filter: blur(50px);
`;

export const CarouselItemContent = styled.div`
  position: relative;
  z-index: 5;
`;

export const NextThumbnail = styled.div`
  display: none;
`;

export const PrevThumbnail = styled.div`
  display: none;
`;

export const FeaturedItem = styled.div`
  
`;