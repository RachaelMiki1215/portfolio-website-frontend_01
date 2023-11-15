import { Metadata } from "next";
import { majorMonoDisplayClass } from "@/components/next-fonts";

import Styles from "./home.module.scss";
import { motion } from "framer-motion";
import PageWrapper from "@/components/container/PageWrapper";

//TODO: Figure out website keywords later.
export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website",
  description: "This website showcases projects done by Rachael Miki Buxton.",
};

export default function Home() {
  return (
    // <PageWrapper>
    <main className={`${majorMonoDisplayClass} ${Styles.main}`}>
      Hey There,
      <br />
      Nice To
      <br />
      See You
      <br />
      Here.
    </main>
    // </PageWrapper>
  );
}
