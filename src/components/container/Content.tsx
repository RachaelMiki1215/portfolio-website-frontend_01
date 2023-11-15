"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Style from "./Content.module.scss";
import ContentContext from "@/context/ContentContext";
import { ContentAreaProps } from "@/types/ContentArea";

const Content: React.FC<{
  children?: React.ReactNode;
  centerVertically?: boolean;
}> = ({
  children,
  centerVertically,
}: {
  children?: React.ReactNode;
  centerVertically?: boolean;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [contentAreaSize, setContentAreaSize] = useState<ContentAreaProps>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setContentAreaSize({
      width:
        document.body.clientWidth -
        parseInt(getComputedStyle(itemRef.current)["paddingLeft"], 10) -
        parseInt(getComputedStyle(itemRef.current)["paddingRight"], 10),
      height:
        document.body.clientHeight -
        parseInt(getComputedStyle(itemRef.current)["paddingTop"], 10) -
        parseInt(getComputedStyle(itemRef.current)["paddingBottom"], 10),
    });
  };

  useEffect(handleResize, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <ContentContext.Provider value={contentAreaSize}>
      <div className={Style.content} ref={itemRef}>
        {/* <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => {
            scrollTo(0, 0);
          }}
        > */}
        {children}
        {/* </AnimatePresence> */}
      </div>
    </ContentContext.Provider>
  );
};

export default Content;
