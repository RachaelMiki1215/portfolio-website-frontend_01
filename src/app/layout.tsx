import MyHeader from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";

import "./global.scss";
import GlobalStyle from "./global.module.scss";
import SocialsBar from "@/components/socials/SocialsBar";
import { Metadata } from "next";
import Content from "@/components/container/Content";
import NoScriptDisplay from "@/components/noscript/NoScriptDisplay";
import {
  jetbrainsMonoBold,
  jetbrainsMonoNormal,
  majorMonoDisplay,
} from "@/components/next-fonts";

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website",
  description: "This website showcases projects done by Rachael Miki Buxton.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${majorMonoDisplay.variable} ${jetbrainsMonoNormal.variable} ${jetbrainsMonoBold.variable}`}
    >
      <body>
        <div className={GlobalStyle.headerBackdrop}></div>
        <div className={GlobalStyle.socialsbarBackdrop}></div>
        <MyHeader className={GlobalStyle.header} />
        <Navbar className={GlobalStyle.navbar} />
        <SocialsBar className={GlobalStyle.socialsbar} />
        <Content>{children}</Content>
        <NoScriptDisplay />
      </body>
    </html>
  );
}
