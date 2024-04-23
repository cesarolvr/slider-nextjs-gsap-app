import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Image, { StaticImageData } from 'next/image';

export const CarouselStyled = styled(motion.div)`
  width: 100vw;
  
  .track {
    width: 500vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: start;
    flex-wrap: nowrap;
  }
`;

export const CarouselItem = styled.div<{ $backgroundImage?: StaticImageData }>`
  height: 100%;
  width: 20%;
  background-image: url(${props => props.$backgroundImage?.src});
  background-size: 150%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  transform-origin: center center;
  overflow: hidden;
`;

export const CarouselControl = styled(motion.div)`
  position: absolute;
  z-index: 6;
  display: flex;
  top: calc(100% - 24px);
  align-items: center;
  
  p {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: light;
  }

  .dots {
    display: flex;
    margin-left: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .dot {
    width: 5px;
    height: 8px;
    border: 1px solid white;
    border-radius: 2px;
    margin: 0 2px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &.-active {
      background-color: white;
    }

    &:hover {
      transform: scale(1.6);
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ThumbnailSharedStyles = css`
  width: 140px;
  height: 186px;
  position: absolute;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 248px;
    height: 330px;
  }
`
export const PrevThumbnail = styled(motion.div)`
  ${ThumbnailSharedStyles};
  left: 16px;
  bottom: 16px;
`;

export const PrevImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
  transform-origin: bottom left;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const NextImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
  transform-origin: top right;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const NextThumbnail = styled(motion.div)`
  ${ThumbnailSharedStyles};
  right: 16px;
  top: 16px;
`;


export const FeaturedItem = styled(motion.div)`
  position: relative;
`;

export const FeaturedImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const FeaturedImage = styled(Image)`
  z-index: 3;
  border-radius: 10px;
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 398px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 1024px) {
    width: 512px;
    height: 680px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 75%;
  overflow: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    height: 57%;
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: 140px;
  line-height: 112px;
  font-weight: normal;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  z-index: 4;
  -webkit-text-stroke: 1px white;
	text-stroke: 1px white;
  text-wrap: nowrap;

  @media (min-width: 1024px) {
    font-size: 220px;
    line-height: 176px;
  }
`;


export const TitleOverlay = styled.div`
  overflow: hidden;
`

export const TitleOutline = styled(motion.span)`
  position: absolute;
  display: block;
  font-size: 140px;
  line-height: 112px;
  font-weight: normal;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
  color: transparent;
  -webkit-text-stroke: 1px white;
	text-stroke: 1px white;
  text-shadow: none;
  text-wrap: nowrap;
  user-select: none;

  @media (min-width: 1024px) {
    font-size: 220px;
    line-height: 176px;
  }
`;

export const TitleCursorWrapper = styled(motion.div)`
`;