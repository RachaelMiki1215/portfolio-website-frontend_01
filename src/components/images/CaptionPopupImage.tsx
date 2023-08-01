"use client";

import { CSSProperties, useState } from "react";
import Styles from "./CaptionPopupImage.module.scss";
import { StaticImageData } from "next/image";

type CaptionPopupImageProps = {
  src: string | StaticImageData;
  caption: string;
  imgClassName?: string;
  imgStyle?: CSSProperties;
  captionClassName?: string;
};

const CaptionPopupImage: React.FC<CaptionPopupImageProps> = ({
  src,
  caption,
  imgClassName,
  imgStyle,
  captionClassName,
}) => {
  const [isCaptionVisible, setIsCaptionVisible] = useState<boolean>(false);
  const [captionPosition, setCaptionPosition] = useState<[number, number]>([
    0, 0,
  ]);

  return (
    <>
      <img
        src={typeof src === "string" ? src : src.src}
        alt={caption}
        onMouseEnter={() => {
          setIsCaptionVisible(true);
        }}
        onMouseLeave={() => {
          setIsCaptionVisible(false);
        }}
        onMouseMove={(e) => {
          if (isCaptionVisible) {
            setCaptionPosition([e.clientX, e.clientY]);
          }
        }}
        className={imgClassName}
        style={imgStyle}
      />
      <span
        className={`${Styles.caption} ${captionClassName}`}
        style={{
          opacity: isCaptionVisible ? 1 : 0,
          left: captionPosition[0],
          top: captionPosition[1],
        }}
      >
        {caption}
      </span>
    </>
  );
};

export default CaptionPopupImage;
