import { Metadata } from "next";
import { majorMonoDisplay } from "@/components/next-fonts";

import Styles from "./home.module.scss";

//TODO: Figure out website keywords later.
export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website",
  description: "This website showcases projects done by Rachael Miki Buxton.",
};

export default function Home() {
  // TODO: Come up with a better, more eyecatching home page.
  return (
    <main className={`${majorMonoDisplay.className} ${Styles.main}`}>
      Hey There,
      <br />
      Nice To
      <br />
      See You
      <br />
      Here.
    </main>
  );
}
