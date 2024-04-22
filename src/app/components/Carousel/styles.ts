import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import styled, { css } from 'styled-components';

export const CarouselStyled = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  
  .track {
    width: 500%;
    height: 100%;
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
  width: 248px;
  height: 330px;
  position: absolute;
  cursor: pointer;
`
export const PrevThumbnail = styled(motion.div)`
  ${ThumbnailSharedStyles};
  left: 16px;
  bottom: 16px;

  img {
    /* pointer-events: none; */
  }
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
  width: 512px;
  height: 680px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 57%;
  overflow: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  display: block;
  font-size: 220px;
  font-weight: normal;
  letter-spacing: 4px;
  line-height: 176px;
  text-transform: uppercase;
  text-align: center;
  z-index: 4;
  -webkit-text-stroke: 1px white;
	text-stroke: 1px white;
  text-wrap: nowrap;
`;


export const TitleOverlay = styled.div`
  overflow: hidden;
`

export const TitleOutline = styled(motion.span)`
  position: absolute;
  display: block;
  font-size: 220px;
  font-weight: normal;
  letter-spacing: 4px;
  line-height: 176px;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
  color: transparent;
  -webkit-text-stroke: 1px white;
	text-stroke: 1px white;
  text-shadow: none;
  text-wrap: nowrap;
  user-select: none;
`;

export const TitleCursorWrapper = styled(motion.div)`
`;