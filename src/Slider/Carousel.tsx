import React, { FC, forwardRef, ReactChild, ReactElement } from "react";

interface ICarousel {
  children: ReactChild | ReactChild[];
  indicators: ReactChild;
  slide: { image: string; caption: string };
}

const Carousel = forwardRef<HTMLDivElement, ICarousel>((props, ref) => {
  const { children, indicators, slide } = props;

  return (
    <>
      <div className='feature'>
        <img
          src={`images/slider/${slide.image}`}
          alt={slide.caption}
          key={slide.image}
        />
        <div className='caption'>{slide.caption}</div>
      </div>
      <div className='thumbnails' ref={ref}>
        <ul>{children}</ul>
      </div>
      {indicators}
    </>
  );
});

export default Carousel;
