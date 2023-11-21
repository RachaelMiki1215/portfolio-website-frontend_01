"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Carousel.module.scss";
import { CarouselProps } from "./ContainerTypes";

import { useEffect, useState } from "react";
import React from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Carousel: React.FC<CarouselProps> = ({
  containerClassName,
  pageContainerClassName,
  navigatorClassName,
  children,
}) => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const [slideCount, setSlideCount] = useState<number>(0);

  useEffect(() => {
    setSlideCount(React.Children.count(children));
  }, [children]);

  return (
    <div className={`${Styles.container} ${containerClassName}`}>
      <div className={`${Styles.pageContainer} ${pageContainerClassName}`}>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={Styles.page}
              style={{ transform: `translateX(${(index - currSlide) * 100}%)` }}
            >
              {child}
            </div>
          );
        })}
      </div>
      <div className={`${Styles.navigatorContainer} ${navigatorClassName}`}>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              type="button"
              className={`${Styles.navBtn} ${
                currSlide === index ? Styles.active : ""
              }`}
              onClick={() => {
                setCurrSlide(index);
              }}
            ></button>
          );
        })}
      </div>
      <button
        type="button"
        className={Styles.prevBtn}
        onClick={() => {
          setCurrSlide(() => {
            return currSlide - 1;
          });
        }}
        disabled={currSlide < 1}
      >
        <FontAwesomeIcon icon={faCaretLeft} className={Styles.prevNextIcon} />
      </button>
      <button
        type="button"
        className={Styles.nextBtn}
        onClick={() => {
          setCurrSlide(() => {
            return currSlide + 1;
          });
        }}
        disabled={currSlide >= slideCount - 1}
      >
        <FontAwesomeIcon icon={faCaretRight} className={Styles.prevNextIcon} />
      </button>
    </div>
  );
};

export default Carousel;
