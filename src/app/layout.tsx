import MyHeader from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";

import "./global.scss";
import GlobalStyle from "./global.module.scss";
import SocialsBar from "@/components/socials/SocialsBar";
import { Metadata } from "next";
import Content from "@/components/container/Content";
import NoScriptDisplay from "@/components/noscript/NoScriptDisplay";
import { AnimatePresence } from "framer-motion";

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
    <html lang="en">
      <body>
        <MyHeader className={GlobalStyle.header} />
        <Navbar className={GlobalStyle.navbar} />
        <SocialsBar className={GlobalStyle.socialsbar} />
        <Content>{children}</Content>
        <NoScriptDisplay />
      </body>
    </html>
  );
}
