"use client";

import { majorMonoDisplay } from "../components/next-fonts";

import Styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={`${majorMonoDisplay.className} ${Styles.main}`}>
      Hey There,
      <br />Nice To
      <br />See You
      <br />Here.
    </main>
  );
}
