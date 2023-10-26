import MyHeader from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";

import "./global.scss";
import GlobalStyle from "./global.module.scss";
import SocialsBar from "@/components/socials/SocialsBar";
import { Metadata } from "next";
import Content from "@/components/container/Content";

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website",
  description: "This website showcases projects done by Rachael Miki Buxton.",
};

const NoScriptDisplay: React.FC = () => {
  return (
    <noscript className={GlobalStyle.noscriptDisplay}>
      <h4>Just a reminder...</h4>
      <span>
        Hey there, it seems JavaScript isn't enabled in your browser!
        <br />
        This site might not work properly unless JavaScript is enabled.
      </span>
    </noscript>
  );
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
        {/* TODO: Wait for using Framer Motion AnimatePresence until this issue (https://github.com/vercel/next.js/issues/49279#issuecomment-1541939624) is fixed */}
        {/* <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            className={GlobalStyle.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence> */}
      </body>
    </html>
  );
}
