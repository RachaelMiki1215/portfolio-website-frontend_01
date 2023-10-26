"use client";

import { useState } from "react";
import Styles from "./HoverText.module.scss";

type HoverTextProps = {
  children: React.ReactNode;
  popupText: React.ReactNode | string;
};

export const HoverText: React.FC<HoverTextProps> = ({
  children,
  popupText,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [popupPosition, setPopupPosition] = useState<[number, number]>([0, 0]);

  //   FIXME: Position is wonky and popup text is not showing if overflow is hidden by parent.
  return (
    <span className={Styles.container}>
      <span
        className={Styles.baseText}
        onMouseEnter={() => {
          setIsPopupVisible(true);
        }}
        onMouseLeave={() => {
          setIsPopupVisible(false);
        }}
        onMouseMove={(e) => {
          if (isPopupVisible) {
            setPopupPosition([e.clientX, e.clientY]);
          }
        }}
      >
        {children}
      </span>
      <span
        className={Styles.popupText}
        style={{
          opacity: isPopupVisible ? 1 : 0,
          left: popupPosition[0],
          top: popupPosition[1],
        }}
      >
        {popupText}
      </span>
    </span>
  );
};
