import React, {
  FC,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import Arrow from "./Arrow";
import Carousel from "./Carousel";
import "./styles.css";
import CarouselItem from "./CarouselItem";
import { content } from "../Context/sliderContext";

function Slider(): ReactElement {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const hasNext = slideIndex < content.length - 1;
  const hasPrev = slideIndex > 0;
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleLeft = useCallback(() => {
    if (carouselRef.current) {
      if (hasPrev) {
        setSlideIndex((prev) => prev - 1);
        carouselRef.current.scrollLeft -= 175;
      } else {
        setSlideIndex(content.length - 1);
        carouselRef.current.scrollLeft += 630;
      }
    }
  }, [setSlideIndex, hasPrev]);

  const handleRight = useCallback(() => {
    if (carouselRef.current) {
      if (hasNext) {
        setSlideIndex((prevIndex) => prevIndex + 1);
        carouselRef.current.scrollLeft += 175;
      } else {
        setSlideIndex(0);
        carouselRef.current.scrollLeft = 0;
      }
    }
  }, [setSlideIndex, hasNext]);

  const handleItemClick = useCallback(
    (index) => {
      setSlideIndex(index);
    },
    [setSlideIndex]
  );

  const currentSlide = content[slideIndex];

  return (
    <>
      <Carousel
        indicators={<Arrow handleLeft={handleLeft} handleRight={handleRight} />}
        slide={currentSlide}
        ref={carouselRef}
      >
        {content.map((item, index) => {
          const isSelected = slideIndex === index;
          return (
            <CarouselItem key={item.image}>
              <Item
                selected={isSelected}
                onClick={handleItemClick}
                image={item.image}
                caption={item.caption}
                index={index}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
}

const Item: FC<{
  image: string;
  caption: string;
  index: number;
  onClick: (index: number) => void;
  selected: boolean;
}> = React.memo(({ onClick, image, caption, index, selected }) => {
  const selectedClass = selected ? "selected" : "";
  return (
    <li className={selectedClass}>
      <a href='#' onClick={() => onClick(index)}>
        <img src={`images/slider/${image}`} alt={caption} />
      </a>
    </li>
  );
});

export default Slider;
