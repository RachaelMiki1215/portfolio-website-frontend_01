"use client";

import Style from "./portfolio.module.scss";

import { usePathname } from "next/navigation";

import { usewindowSize } from "@/hooks/usePageDimension";

type Layout_LeftContentDisplayType = {
  leftContent: React.ReactNode | string;
  rightContent: React.ReactNode | string;
};

const Layout_Client: React.FC<Layout_LeftContentDisplayType> = ({
  leftContent,
  rightContent,
}) => {
  const pathname = usePathname();
  const onPortfolioTop: boolean =
    pathname === "/portfolio" || pathname === "/portfolio/";

  const windowSize = usewindowSize();

  return (
    <div
      className={Style.layoutClientContainer}
      style={{
        gridTemplateColumns: `1fr${
          !onPortfolioTop && windowSize.width > 900 ? " 1fr" : ""
        }`,
      }}
    >
      {!onPortfolioTop && windowSize.width > 900 && leftContent}
      {rightContent}
    </div>
  );
};

export default Layout_Client;
