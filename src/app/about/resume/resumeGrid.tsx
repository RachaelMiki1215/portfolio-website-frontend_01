"use client";

import { ReactNode, useContext } from "react";
import Styles from "./Resume.module.scss";
import ContentContext from "@/context/ContentContext";

const ResumeGrid: React.FC<{ children?: React.ReactNode }> = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const contentArea = useContext(ContentContext);

  return (
    <main
      className={Styles.main}
      style={{ height: `${Math.max(contentArea.height - 10, 500)}px` }}
    >
      {children}
    </main>
  );
};

export default ResumeGrid;
