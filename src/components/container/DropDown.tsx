"use client";

import React, { useEffect, useRef, useState } from "react";
import Styles from "./DropDown.module.scss";
import { SlidingDropDownProps } from "./ContainerTypes";

const SlidingDropDown: React.FC<SlidingDropDownProps> = ({
  headerComponent,
  dropdownComponent,
  isOpenOnDefault = false,
  changeOnClick = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenOnDefault);
  const [height, setHeight] = useState<string>();
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
    <div className={Styles.container}>
      <div
        className={Styles.header}
        onClick={changeOnClick ? changeOpenState : () => {}}
      >
        {headerComponent}
      </div>
      <div
        className={Styles.dropdown}
        style={{ maxHeight: isOpen ? height : "0px" }}
        ref={dropdownContainerRef}
      >
        {dropdownComponent}
      </div>
    </div>
  );
};

export default SlidingDropDown;
