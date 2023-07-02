import React, { useEffect, useRef, useState } from "react";
import Styles from "./DropDown.module.scss";

export default function SlidingDropDown({
  headerComponent,
  dropdownComponent,
  isOpenOnDefault = false,
  changeOnClick = false,
}: {
  headerComponent: React.ReactNode;
  dropdownComponent: React.ReactNode;
  isOpenOnDefault?: boolean;
  changeOnClick?: boolean;
}) {
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
    <div
      className={Styles.container}
    >
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
}
