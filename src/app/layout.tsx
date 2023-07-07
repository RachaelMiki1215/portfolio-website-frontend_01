import MyHeader from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";

import "./global.scss";
import GlobalStyle from "./global.module.scss";
import SocialsBar from "@/components/socials/SocialsBar";
import { Metadata } from "next";

export const metadata : Metadata = {
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
        <div className={GlobalStyle.content}>{children}</div>
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
