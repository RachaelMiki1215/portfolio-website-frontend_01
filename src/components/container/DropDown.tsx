"use client";

import React, { useEffect, useRef, useState } from "react";
import Styles from "./DropDown.module.scss";
import { SlidingDropDownProps } from "./ContainerTypes";

const SlidingDropDown: React.FC<SlidingDropDownProps> = ({
  headerComponent,
  dropdownComponent,
  dropdownStyle,
  isOpenOnDefault = false,
  changeOnClick = false,
  openOnHover = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenOnDefault);
  const [height, setHeight] = useState<string>();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const changeOpenState = () => {
    setIsOpen(() => {
      return !isOpen;
    });
  };

  useEffect(() => {
    const dropdown = dropdownContainerRef.current.children[0] as HTMLElement;
    let dropdownHeight =
      parseInt(dropdown.offsetHeight.toString(), 10) +
      // @ts-ignore
      parseInt(getComputedStyle(dropdown)["margin-top"], 10) +
      // @ts-ignore
      parseInt(getComputedStyle(dropdown)["margin-bottom"], 10) +
      "px";

    setHeight(dropdownHeight);
  }, []);

  return (
    <div
      className={Styles.container}
      onClick={
        changeOnClick && !isOpen
          ? () => {
              setIsOpen(true);
            }
          : () => {}
      }
      onMouseEnter={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      <div
        className={Styles.header}
        onClick={
          changeOnClick && isOpen
            ? () => {
                setIsOpen(false);
              }
            : () => {}
        }
      >
        {headerComponent}
      </div>
      <div
        className={Styles.dropdown}
        style={{
          maxHeight: isOpen || (openOnHover && isMouseOver) ? height : "0px",
          ...dropdownStyle,
        }}
        ref={dropdownContainerRef}
      >
        {dropdownComponent}
      </div>
    </div>
  );
};

export default SlidingDropDown;
