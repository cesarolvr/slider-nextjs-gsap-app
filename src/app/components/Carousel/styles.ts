import { StaticImageData } from 'next/image';
import styled, {css} from 'styled-components';

export const CarouselStyled = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: scroll;
  position: relative;
`;

export const CarouselControl = styled.div`
  position: absolute;
  inset: 0;
`;

export const CarouselItem = styled.div<{ $backgroundImage?: StaticImageData }>`
  height: 100vh;
  width: 100vw;
  flex-shrink: 0;
  overflow: hidden;
  background-image: url(${props => props.$backgroundImage?.src});
  background-size: 150%;
  background-position: center center;
  background-repeat: no-repeat;
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

  > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`
export const PrevThumbnail = styled.div`
  ${ThumbnailSharedStyles};
  left: 16px;
  bottom: 16px;
  /* display: none; */
`;

export const NextThumbnail = styled.div`
  ${ThumbnailSharedStyles};
  right: 16px;
  top: 16px;
  /* display: none; */
`;


export const FeaturedItem = styled.div`
  
`;

export const ImageWrapper = styled.div`
  width: 512px;
  height: 680px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 3;
    border-radius: 10px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  position: absolute;
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

export const TitleOutline = styled.span`
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